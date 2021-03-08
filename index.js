const express = require('express');
const Joi = require('joi');
const { env } = require('process');
const app = express();
app.use(express.json());
const courses =[
  {id:1, name: 'course 1'},
  {id:2, name: 'course 2'},
  {id:3, name: 'course 3'},
]

app.get('/', (req,res)=>{
  res.send('hellow world');
});
app.get('/api/courses',(req,res)=>{
  res.send(courses);
});
app.post('/api/courses',(req,res)=>{
  const schema = {
    name: Joi.string().min(3).required()
  };
 const result  =  Joi.validate(req.body, schema);

  if(result.error){
    res.status(400).send(result.error.details[0].message);
    return;
  }
  const course={
    id: courses.length+1,
    name: req.body.name
  };
  courses.push(course);
  res.send(course);
});
app.listen(3000,()=>console.log(`listening at 3000`));