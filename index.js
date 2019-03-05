const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hello World!'))
app.get('/path1', (req, res) => res.send({
  route: "/path1"
}));
app.get('/path2', (req, res) => res.send({
  route: "/path2"
}));
app.get('*', (req, res) => res.send({
  default: req.url
}));

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
