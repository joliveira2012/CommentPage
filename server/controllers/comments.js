const Comment = require('../models/comments')

module.exports = app => {
    app.get('/comments', (req, res) => {
        Comment.list(res)
    })

    app.post('/comments', (req, res) => {
       const comment = req.body

        Comment.add(comment, res)
    })
}