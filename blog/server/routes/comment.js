const express = require('express')

const router = express.Router()

router.post('/', (request, response) => {
  response.send('create a comment')
})

router.put('/:id', (request, response) => {
  response.send('edit a comment')
})

router.delete('/:id', (request, response) => {
  response.send('delete a comment')
})

module.exports = router
