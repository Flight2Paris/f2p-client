
var	Logger = require('./logger');
var 	EsFrikiBrowser = require('./esfriki');

var logger = Logger.getLogger();

module.exports = {

	post: function (program, cb) {

		var user = program.user;
		var password = program.password;

		if (!user || !password) {
			return cb(new Error("Debes especificar usuario y password"));	
		}

		var EsFriki = new EsFrikiBrowser(program.site);

		EsFriki.login(user, password, function (e) {
			if (e) {
				return cb(new Error("Login fails"));
			}

			EsFriki.post(program.content, function (e, url) {
				if (e) return cb(new Error("Error posteando"));
				cb(null, url);
			});


		});
	
	}

};

