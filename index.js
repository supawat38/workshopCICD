const express = require('express')
const app = express()
const port = 8099

app.get('/hello-world', (req, res) => {
  res.send('hello world docker image')
})

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`)
})