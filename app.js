const express = require('express');
const authRoutes = require('./routes/auth-routes');

const app = express();

//set-up view engine
app.set('view engine','ejs');

//set-up route
app.use('/auth',authRoutes)

//index route
app.get('/',(req, res)=>{
    console.log('HEY!!!');
    res.render('index');
});

//listen to a port
app.listen(8000,()=>{
    console.log('listening at port 8000')
});