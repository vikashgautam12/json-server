const express = require('express')
const app = express()
const port = 3000

app.get('/status', (req, res) => {
  res.send('Node server is running')
})
app.post('/status', (req, res) => {
    res.send('Node post')
})

app.put('/status', (req, res) => {
    res.send('Node put')
})
app.delete('/status', (req, res) => {
    res.send('delete surya')
})
app.patch('/status', (req, res) => {
    res.send('patch surya')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})