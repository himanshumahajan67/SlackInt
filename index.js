
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.post('/slack', (req, res) => {
    console.log('mast hai bhjai');
    console.log(JSON.parse(req.body));
    res.send(JSON.parse(req.body).challange)
});

app.get('/slack', (req, res) => {
    console.log('mast hai behen');
    res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})