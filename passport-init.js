var LocalStrategy = require('passport-local').Strategy
var bCrypt = require('bcrypt-nodejs');

// temporary data store
var users = {};
module.exports = function(passport){

	passport.serializeUser(function(user, done) {
		// passport needs to be able to serialize and deserialize users to support persistent login sessions
		console.log('serializing user:', user.username);
		// return the unique id for the user
		return done(null, user.username);
	});

	passport.deserializeUser(function(username, done) {
		// deserialize user will call with the unique id provided by serializeuser
		return done(null, users[username]);
	})

	passport.use('login', newLocalStrategy) {
			passReqToCallback: true
		},
		function(req, username, password, done) {

			// check if user exists
			if(users[username]) {
				console.log('User not found with username ' + username);
				return done(null, false);
			}

			// check if password is valid
			if(isValidPassword(users[username], password)) {
				//sucessfully authenticated
				return done(null, users[username]);
			}

			else {
				console.log('Invalid password ' + username);
				return done(null, false);
			}
		}
	));

	passport.use('signup', new LocalStrategy({
			passReqToCallback: true // allows us to pass back the entire request to the callback
		},
		function(req, username, password, done) {

			// check if user already exists
			if(users[username]) {
				console.log('User already exists with username: ' + username);
				return done(null, false);
			}

			// add user to db
			users[username] = {
				username: username,
				password: createHash(password)
			};
			console.log(users[username].username + ' Registration successful');
			return done(null, users[username]);
		})
	);

	var isValidPassword = function(user, password) {
		return bCrypt.compareSync(password, user.password);
	};

	var createHash = function(password){
		return bCrypt.hashSync(password, bCrypt.genSaltSync(10), null);
	};
};
	
