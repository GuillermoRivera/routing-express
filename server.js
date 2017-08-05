const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.sendFile(`${__dirname}/index.html`)
})

app.get('/twitter', (req, res) => {
  res.redirect(301, 'https://www.twitter.com/guillerivera325')
})

app.get('/facebook', (req, res) => {
  res.redirect(301, 'https://www.facebook.com/Guillermo.Rivera32')
})

app.get('/linkedin', (req, res) => {
  res.redirect(301, 'https://www.linkedin.com/in/juan-guillermo-rivera-orozco-612824141/')
})

app.get('/github', (req, res) => {
  res.redirect(301, 'https://www.github.com/GuillermoRivera')
})

app.listen(port)

console.log(`Server running at port: ${port}`)