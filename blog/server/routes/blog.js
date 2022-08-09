const express = require('express')
const db = require('../db')
const utils = require('../utils')

const router = express.Router()

router.post('/', (request, response) => {
  const { title, details, userId, tags } = request.body

  const statement = `
    insert into blog
      (title, details, userId, tags)
    values 
      ('${title}', '${details}', '${userId}', '${tags}')
  `

  const connection = db.openConnection()
  connection.query(statement, (error, result) => {
    connection.end()
    response.send(utils.createResult(error, result))
  })
})

router.put('/:id', (request, response) => {
  response.send('edit blog')
})

router.get('/search', (request, response) => {
  const statement = `select * from blog`

  const connection = db.openConnection()
  connection.query(statement, (error, result) => {
    connection.end()
    response.send(utils.createResult(error, result))
  })
})

module.exports = router
