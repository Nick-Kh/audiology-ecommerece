import express from 'express';
import products from './data/products';
import dotenv from 'dotenv';
import Mongo from './config/db';

const app = express();
dotenv.config();
const PORT = process.env.PORT || 5000;
Mongo.dbconnect();

app.get('/', (req, res) => {
  res.send('API RESPONSE.');
});
app.get('/products', (req, res) => {
  res.json(products);
});
app.get('/products/:id', (req, res) => {
  const product = products.find(p => p._id === req.params.id);
  res.json(product);
});

app.listen(PORT, () => console.log(`Server is up and running in ${process.env.MODE} mode on port: `, PORT));
