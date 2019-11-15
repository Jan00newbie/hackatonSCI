const express = require('express');
const router = express.Router();
// const mongoose = require('mongoose')
// const Article = require('../models/article')
// const Category = require('../models/category')
// const User = require('../models/user')

// mongoose.connect('mongodb://localhost/izipedia', {useNewUrlParser: true})
//   .then(() => console.log('Connected to MongoDB...'))
//   .catch(err => console.error('Could no connect to MongoDB...', err))

router.get('*', (req, res) => {
  res.render('index')
})

// const categoriesRouting = async () => {
//   return await Category
//     .find()
//     .select('name strip _id')
// }

// const checkArticle = async (id, title) => {
//   return await Article
//     .findOne({isPublished: true, category: id, strip: title})
//     .select('name _id')
// }

// router.get('/api/articles', async (req, res) => {
//   res.send(
//     await Article
//       .find()
//       .populate('author', 'username -_id')
//       .populate('category', 'name strip -_id')
//       .select('title strip articleID author category date')
//       .sort('date')
//   )
// })

// /* Home Page Routing */

// router.get('/api/articles/home', async (req, res) => {
//   const callback = {
//     recentlyAdded: [],
//     bySection: []
//   };
  
//   let recentlyAdded = await Article
//     .find({isPublished: true})
//     .sort('-date')
//     .limit(5)
//     .populate('category', 'name strip -_id')
//     .populate('author', 'username -_id')
//     .select('title strip category author date -_id')

//   callback.recentlyAdded = recentlyAdded

//   let categories = await Category
//     .find()
//     .select('name strip')
  
//   for (let category of categories) {
//     const articles = await Article
//       .find({isPublished: true, category: category._id})
//       .sort('-date')
//       .limit(4)
//       .populate('author', 'username -_id')
//       .select('title strip author date -_id')
//     articles.forEach((article, idx) => {
//       articles[idx] = {
//         title: article.title,
//         strip: article.strip,
//         author: article.author.username,
//         date: article.date
//       }
//     })
//     const next = await Article
//       .findOne({isPublished: true, category: category._id})
//       .sort('-date')
//       .skip(4)
//       .limit(1)
//       .select('strip -_id')

//     const strip = (next == null) ? 'recenzja-pocztowki-z-wwa' : next.strip

//     callback.bySection.push({
//       category: {
//         name: category.name,
//         strip: category.strip
//       },
//       articles: articles,
//       next: strip
//     })
//   }
  
//   res.send(callback)
// })

// router.get('/api/article/:sectionName/:articleTitle', async (req, res) => {
//   const categoryData = await Category
//     .findOne({strip: req.params.sectionName})
//     .select('_id')
  
//   if (categoryData == null)
//     res.status(400).send('No such section in database')

//   const data = await Article
//       .findOne({isPublished: true, category: categoryData._id, strip: req.params.articleTitle})
//       .populate('author', 'username -_id')
//       .populate('category', 'name strip -_id')
//       .select('title author content category tags date -_id')
//   if (data != null)
//     res.send(data)
//   else
//     res.status(400).send('No such article in database')
// })

// router.get('/api/categories', async (req, res) => {
//   let data = await Category
//       .find()
//       .select('name strip -_id')
//   res.send(data)
// })

// router.get('/api/category/:sectionName', async (req, res) => {
//   const data = await Category
//     .findOne({strip: req.params.sectionName})
//     .select('_id')
  
//   if (data === null)
//     res.status(400).send('No such section in database')
//   else
//     res.send(data)
// })

// categoriesRouting()
//   .then((categories) => {
//     for (let category of categories) {
//       router.get(`/${category.strip}`, (req, res) => {
//         res.render('index', {title: category.name})
//       })
//       router.get(`/${category.strip}/:articleTitle`, (req, res) => {
//         checkArticle(category.id, req.params.articleTitle)
//           .then(data => {
//             if (data != null) {
//               res.render('index', {title: data.name})
//               return
//             } else
//               res.status(400).send('No such article in database')
//           })
//       })
//     }
//   })

// /* POST Requests */

// router.post('/api/article', async (req, res) => {
//   const article = new Article ({
//     title: req.body.title,
//     strip: req.body.title.toLowerCase().trim().replace(/\s/g, '-').replace(/ą/g, 'a').replace(/ć/g, 'c').replace(/ę/g, 'e')
//       .replace(/ł/g, 'l').replace(/ń/g, 'n').replace(/ó/g, 'o').replace(/ś/g, 's').replace(/ź/g, 'z').replace(/ż/g, 'z').replace(/[^a-z0-9-]+/gi, ''),
//     content: req.body.content,
//     author: req.body.author,
//     category: req.body.category,
//     tags: req.body.tags
//   })
//   const result = await article.save();
//   res.send(result)
// })

// router.post('/api/category', async (req, res) => {
//   const category = new Category ({
//     name: req.body.name
//   })
//   const result = await category.save();
//   res.send(result)
// })

// router.post('/api/user', async (req, res) => {
//   const user = new User ({
//     username: req.body.username,
//     password: req.body.password
//   })
//   const result = await user.save();
//   res.send(result)
// })

module.exports = router;