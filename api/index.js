const express = require('express')
const app = express()
const fs = require('fs')
const cors = require('cors');
const util = require('util')

const fsReadFile = util.promisify(fs.readFile)

const port = 3000

app.use(cors())

// loading routes, to tell express that when someone hits one of these, we want the attached callback to run
app.get('/', (req, res) => res.send('Hello World'))
app.get('/hello', (req, res) => res.send('Hello World 3'))
app.get('/records', (req, res) => {
  return fsReadFile([__dirname, 'records.json'].join('/'), 'utf8')
    .then(buffer => {
      res.setHeader('Content-Type', 'application/json')
      return res.send(buffer)
    }).catch((err) => console.err(err))
})
app.listen(port, () => console.log(`Example app listening on port ${port}`))
