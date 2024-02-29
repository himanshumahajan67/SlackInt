
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.post('/slack', (req, res) => {
    console.log('mast hai bhjai');
    res.send('Hello World!')
});

app.get('/slack', (req, res) => {
    console.log('mast hai behen');
    res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})