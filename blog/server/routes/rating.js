const express = require('express')

const router = express.Router()

router.post('/rating/', (request, response) => {
  response.send('add a rating')
})

router.put('/rating/:id', (request, response) => {
  response.send('edit a rating')
})

router.delete('/rating/:id', (request, response) => {
  response.send('delete a rating')
})

module.exports = router
