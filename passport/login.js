var LocalStrategy   = require('passport-local').Strategy;
var User = require('../schemas/users');

module.exports = function(passport){

    var isValidPassword = function(user, password){
        return (user.password===password);
    };

    passport.use(new LocalStrategy({
            passReqToCallback: true
        },
        function(req, username, password, done) {
            console.log(User);
            User.findOne({ 'username' :  username },
                function(err, user) {
                    if (err)
                        return done(err);
                    if (!user){
                        console.log('User Not Found with username '+username);
                        return done(null, false);
                    }
                    if (!isValidPassword(user, password)){
                        console.log('Invalid Password');
                        return done(null, false);
                    }
                    return done(null, user);
                }
            );

        })
    );
};