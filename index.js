const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors');
const categories = require('./data/categories.json');
const news = require('./data/news.json')

app.use(cors())
app.get('/', (req, res) => {
  res.send('dragon news portals data is coming !')
})
app.get('/categories', (req, res) => {
  res.send(categories)
})

app.get('/categories/:id',  (req, res)=> {
  res.send(news)
})

app.listen(port, () => {
  console.log('dragon server is running at port ',port)
})