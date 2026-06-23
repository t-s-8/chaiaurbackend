require('dotenv').config()

const express = require('express');

const app = express()

const githubdata={
     "name":"tushar",
      age:20

}

const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req, res) => {
  res.send('t_s_8')
})

app.get('/login', (req, res) => {
  res.send('<h1>please login</h1>')
})

app.get('/github', (req, res) => {
  res.json(githubdata)
})

app.get('/youtube',(req,res)=>{
    req.send('<h2>You need to create account</h2>')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})