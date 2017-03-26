
const JwtStrategy = require('passport-jwt').Strategy,
     ExtractJwt = require('passport-jwt').ExtractJwt;
const config = require('./database');
const User = require('../models/user');

const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeader();
opts.secretOrKey = config.secret ;

module.exports = function (passport) {

        passport.use(new JwtStrategy(opts, function(jwt_payload, done) {


            User.findUserbyId({_id: jwt_payload._doc._id}, function(err, user) {
                if (err) {
                    return done(err, false);
                }
                if (user) {
                    done(null, user);
                } else {
                    done(null, false);

                }
            });
        }));

}