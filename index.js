const express = require('express')
const app = express()

app.get('/dennis', function (req, res) {
  res.send('hola  mi nombre es  dennis 🐱‍👤');
})

app.listen(3000)  
