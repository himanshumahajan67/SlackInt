
const express = require('express')
const app = express()
const port = 3000;

// For parsing application/json
app.use(express.json());
 
// For parsing application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.post('/slack', (req, res) => {
    console.log('mast hai bhjai');
    console.log(req.body);
    res.send(req.body.challenge)
});

app.get('/slack', (req, res) => {
    console.log('mast hai behen');
    res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})