const express = require('express')
const app = express()
const fs = require('fs')
const port = 3000

app.get('/', (req, res) => res.send('Hello World'))
app.get('/hello', (req, res) => res.send('Hello World 3'))
app.get('/records', (req, res) => {
  fs.readFile([__dirname, 'records.json'].join('/'), 'utf8', (err, buffer) => {
    if (err) {
      return res.send(500)
    }
    res.send(buffer)
  })
})
app.listen(port, () => console.log(`Example app listening on port ${port}`))
