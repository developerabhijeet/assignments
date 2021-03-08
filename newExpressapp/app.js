const express = require('express');
const app = express();
app.set('view engine','ejs');
app.listen(3001);
app.get('/',(req,res)=>{
  const items = [
    {name:'Mobile Phone',price: 1000},
    {name: 'Book', price: 30},
    {name: 'Laptop', price:2000},
  ]
  res.render('index',{items});  
})
app.get('/add-item',(req,res)=>{
  res.render('add-item');  
})
app.use((req, res)=>{
  res.render('error');  
})