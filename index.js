const express = require('express')
const app = express()
const port = process.env.PORT || 3000 ;

app.get('/', (req, res) => {
  res.send('Welcome to Easy English Academy!')
})

app.get('/status', (req, res) => {
    res.send('ok')
  })


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})