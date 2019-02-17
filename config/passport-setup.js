const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const keys = require('./keys');
const User = require('../models/user-models');

passport.use(
    new GoogleStrategy({
        //options for the google strat
        callbackURL:'/auth/google/redirect',
        clientID:keys.google.clientID,
        clientSecret:keys.google.clientSecret
    }, (accessToken, refreshToken, profile, done) => {
        //check if user already exist in our db
        User.findOne({googleId: profile.id}).then((currentUser) => {
            if(currentUser){
                console.log('user has visited our site');
            }else{
                new User({
                    username: profile.displayName,
                    googleId: profile.id
                }).save().then((newUser) => {
                    console.log('new user created:' + newUser);
                });
            }
        })
    })
);
