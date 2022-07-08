const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const mongoose = require('mongoose');
const User = mongoose.model('users');
const secretOrKey = 'gafdfsddfggADAEDW4WR4324feds';


const opts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey,
};
dbpass='acdefgtdbsge'
accesskey='NKJAKASLNLANFLSNLFNNCLNSLKANL'
secretkey='5cwd6BdnGHJ76BHBBbkkd8jhbbdBBTFY'
module.exports = passport => {
  passport.use(new JwtStrategy(opts, (jwt_payload, done) => {
    User.findById(jwt_payload.id)
      .then(user => {
        if(user){
          return done(null, user);
        }
        return done(null, false);
      })
      .catch(err => {
        throw new Error(err)
      });
  }));
}
