var passport = require("passport");
var GoogleStrategy = require("passport-google-oauth20");

passport.use(
    new GoogleStrategy({
        //options for the strategy
    }), () => {
        // passport callback function
    }
);