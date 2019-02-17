const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');

passport.use(
    new GoogleStrategy({
        //options for the google strat
        clientID:'640011586518-6hs4igerst4g8630fm3dkh1du78rfvp0.apps.googleusercontent.com',
        clientSecret:'jrvG5ZCcS46UsN6pqpeZ3LkF'
    }), () => {
        //passport callback function
});
