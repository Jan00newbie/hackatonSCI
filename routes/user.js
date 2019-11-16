const express = require('express')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { check } = require('express-validator');

const validate = require('../middleware/validate')
const auth = require('../middleware/auth')

const User = require('../Models/User')

const secret = require('../config/default.json').secret


const router = express.Router()

/**
 * @route GET /api/user
 * @desc Get user data
 * @access private
 */
router.get('/', auth, async (req, res) => {
    
    try {
        const userData = await User.findById(req.userId)

        if (!userData) {
            return res.status(400).send({
                err: 'Please log in again.'
            })
        }

        return res.status(200).send({
            name: userData.name,
            email: userData.email
        })

    } catch (error) {
        console.error(error);
    }
})


/**
 * @route POST /api/user
 * @desc Create new user
 * @returns auth token
 * @access public
 */
router.post('/',
    [
        check('firstName', 'Firstname is required').not().isEmpty(),
        check('lastName', 'Lastname is required').not().isEmpty(),
        check('email', 'Please include a valid email').isEmail(),
        check('password', 'Please enter a password with 6 or more characters').isLength({ min: 6 }),
        check('age', 'Please provide age').not().isEmpty().isInt(),
        check('city', 'Please provide city').not().isEmpty(),
        validate
    ],
    async (req, res) => {

        const { email, password, firstName, lastName, age, city } = req.body

        try {
            const foundUser = await User.findOne({ email })
            if (foundUser) {
                return res.status(400).send({
                    warnings: ['User already exist!']
                })
            }

            const salt = await bcrypt.genSalt()

            const hash = await bcrypt.hash(password, salt)

            const user = new User({
                password: hash,
                email,
                firstName,
                lastName,
                age,
                city
            })

            const savedUser = await user.save()

            const token = jwt.sign({
                id: savedUser._id
            }, secret, {
                expiresIn: '1h'
            })

            return res.status(200).send({ token })
            
        } catch (error) {
            console.error(error)
        }
    }
)

module.exports = router