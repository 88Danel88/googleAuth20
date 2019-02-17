const express = require('express');
const app = express();

app.set('view engine','ejs');

app.get('/',(req, res)=>{
    console.log('HEY!!!');
    res.render('index');
});

app.listen(8000,()=>{
    console.log('listening at port 8000')
});