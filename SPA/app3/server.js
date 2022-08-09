const express = require('express')
const mysql = require('mysql')

function openDatabaseConnection() {
  // create the connection
  const connection = mysql.createConnection({
    /* host on which db is created */
    host: 'localhost',
    /* mysql port number */
    port: 3306,
    /* mysql credentials */
    user: 'root',
    /* mysql credentials */
    password: 'root',
    /* db to be connected */
    database: 'dec10',
  })

  // open the connection
  connection.connect()

  return connection
}

const app = express()

app.get('/', (request, response) => {
  response.send('welcome to my REST APIs')
})

app.get('/product', (request, response) => {
  // get the connection
  const connection = openDatabaseConnection()

  // prepare the statement
  const statement = `select id, title, price, description, category from product`

  // execute the query
  connection.query(statement, (error, data) => {
    // close the database connection
    connection.end()

    if (error) {
      // there is an error while executing the sql statement
      response.send(error)
    } else {
      // there is no error
      response.send(data)
    }
  })
})

app.listen(4000, () => {
  console.log('server started on port 4000')
})
