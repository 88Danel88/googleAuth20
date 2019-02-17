const express = require('express');
const authRoutes = require('./routes/auth-routes');
const profileRoutes = require('./routes/profile-routes');
const passportSetup = require('./config/passport-setup');
const mongoose = require('mongoose');
const keys = require('./config/keys');
const cookieSession = require('cookie-session');
const passport = require('passport');
const app = express();

//set-up view engine
app.set('view engine','ejs');

//set-up cookie session
app.use(cookieSession({
    maxAge: 24 * 60 * 60 * 1000,
    keys:[keys.session.cookieKey]
}));

//initialize passport
app.use(passport.initialize());
app.use(passport.session());

//connect to mongodb
mongoose.connect(keys.mongodb.dbURI, { useNewUrlParser: true }, () => {
    console.log('connected to mongodb');
});

//set-up route
app.use('/auth', authRoutes)
app.use('/profile', profileRoutes);

//index route
app.get('/',(req, res)=>{
    console.log('APPLICATION IS UP!!!');
    res.render('index',{user: req.user});
});

//listen to a port
app.listen(8000,()=>{
    console.log('listening at port 8000')
});