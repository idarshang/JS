// import the http module to create a server
const http = require('http')

// create a server object
const server = http.createServer((request, response) => {
  console.log('received request')
  console.log(`method = ${request.method}`)
  console.log(`path = ${request.url}`)

  if (request.method == 'GET') {
    if (request.url == '/product') {
      console.log('select * from product')
    } else if (request.url == '/category') {
      console.log('select * from category')
    }
  } else if (request.method == 'POST') {
    if (request.url == '/product') {
      console.log('insert into product')
    } else if (request.url == '/category') {
      console.log('insert into category')
    }
  } else if (request.method == 'PUT') {
    if (request.url == '/product') {
      console.log('update product ....')
    } else if (request.url == '/category') {
      console.log('update category ....')
    }
  } else if (request.method == 'DELETE') {
    if (request.url == '/product') {
      console.log('delete from product')
    } else if (request.url == '/category') {
      console.log('delete from category')
    }
  }

  // call this function to send the data added in
  // response to the client
  response.end('this is a message from server')
})

// start the server
server.listen(4000, () => {
  console.log(`server started on port 4000`)
})
