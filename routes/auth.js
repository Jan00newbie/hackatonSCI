const express = require('express')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { check } = require('express-validator')

const validate = require('../middleware/validate')

const User = require('../Models/User')

const secret = require('../config/default.json').secret

const router = express.Router()


/**
 * @route GET /api/auth
 * @desc Endpoint for user logging
 * @returns auth token
 * @access private
 */
router.post('/',[
    check('email', 'Please include a valid email').isEmail(),
    check('password', 'Please enter a password with 6 or more characters').not().isEmpty(),
    validate
], async (req, res) => {

    const { email, password } = req.body

    const foundUser = await User.findOne({email})

    const wrongDataEnteredMessage = 'The password or email that have been entered is incorrect.'

    if(!foundUser){
        return res.status(401).send({errors: [wrongDataEnteredMessage]})
    }
    const isCorrectPassword = await bcrypt.compare(password, foundUser.password);
    
    if(!isCorrectPassword){
        return res.status(400).send({errors: [wrongDataEnteredMessage]})
    }

    const token = jwt.sign({id: foundUser._id}, secret, {
        expiresIn: '1h'
    })

    return res.status(200).send({token})
})

module.exports = router