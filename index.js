const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors');
const categories = require('./data/categories.json');
const news = require('./data/news.json');


app.use(cors());

app.get('/',(req,res)=>{
    res.send(' Send successfully')
})

app.get('/categories/:id',(req,res)=>{

    const id = req.params.id;

    if(id==='08'){
        res.send(news);
    }
    else{
        const selectedCategory = news.filter(ca =>ca.category_id === id);
        res.send(selectedCategory);
    }
    
})

app.get('/news-categories',(req,res)=>{
    res.send(categories);
})

app.get('/news', (req,res)=>{
    res.send(news)
})

app.get('/cate')

app.get('/news/:id',(req,res)=>{
    console.log(req.params);
    const id = req.params.id;

    const selectedNews = news.find(n =>n._id === id);
    res.send(selectedNews);
})

app.listen(port, ()=>{

    console.log('Dragon news Running on port', port);

});