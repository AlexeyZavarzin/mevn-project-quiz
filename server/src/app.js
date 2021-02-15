const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const mongoose = require('mongoose')

const Post = require("../models/post")


const app = express()

app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

mongoose.connect('mongodb://localhost:27017/posts').then(() => console.log("Successful database connection"))
const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error"))
db.once("open", () => console.log("Connection Succeeded"))

app.get('/posts', (req, res) => {
    Post.find({}, 'title description', function (error, posts) {
        if (error) {
            console.log(error)
        }
        res.send({
            posts: posts
        })
    }).sort({_id:-1})
})

app.post('/add_post', (req, res) => {
    const title = req.body.title
    const description = req.body.description
    const new_post = new Post({
        title: title,
        description: description
    })

    new_post.save(function (error) {
        if (error) {
            console.log(error)
        }
        res.send({
            success: true,
        })
    })
})

app.put('/posts/:id', (req, res) => {
    Post.findById(req.params.id, 'title description', function (error, post) {
        if (error) {
            console.log(error)
        }
        post.title = req.body.title
        post.description = req.body.description
        post.save(function (error) {
            if (error) {
                console.log(error)
            }
            res.send({
                success: true
            })
        })
    })
})

app.delete('/posts/:id', (req, res) => {
    Post.remove({
        _id: req.params.id
    }, function (error, post) {
        if (error) {
            console.log(error)
        }
        res.send({
            success: true
        })
    })
})

app.get('/posts/:id', (req, res) => {
    Post.findById(req.params.id, 'title description', function (error, post) {
        if (error) {
            console.log(error)
        }
        res.send(post)
    })
})

app.listen(process.env.PORT || 8081)
