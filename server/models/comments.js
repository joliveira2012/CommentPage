const moment = require('moment')
const connection = require('../infrastructure/connection')
const utils = require('../utils/textToSpeech')

class Comment {
    add(comment, res) {
        const created_date = moment().format('YYYY-MM-DD HH:MM:SS')
        const text = comment.text;
        if (comment.text.length <= 0) {
            res.status(400).json({ error: 'O texto do comentário não pode ser vazio' })
        } else {
            const commentDated = { ...comment, text, created_date }

            const sql = 'INSERT INTO Comments SET ?'

            connection.query(sql, commentDated, (error, results) => {
                if (error) {
                    res.status(400).json(error)
                }

                utils.textToSpeech(results.insertId, comment.text)
                res.status(201).json(comment)
            })
        }
    }

    list(res) {
        const sql = 'SELECT * FROM comments'

        connection.query(sql, (error, results) => {
            if (error) {
                res.status(400).json(error)
            } else {
                res.status(200).json(results)
            }
        })
    }

}

module.exports = new Comment