require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/twitter',(req,res) => {
res.send('maze.com')
})
app.get('/login',(req,res) => {
    res.send('<input type="text" placeholder="name"><input type="text" placeholder="password">')
})

app.listen(process.env.port, () => {
  console.log(`Example app listening on port ${port}`)
})