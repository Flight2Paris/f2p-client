var Browser = require("zombie");


var EsFriki = function () {
	this.initialize.apply(this,arguments);
};

EsFriki.prototype.initialize = function () {
	this.browser =  new Browser();
};

EsFriki.prototype.login = function (user, pass, callback) {

	var browser = this.browser;

	browser.visit("http://esfriki.com",function(e,b, status){
	
		if (!browser.success) return callback('Not success');

		browser
		.fill("#login-form input[name=username]",user)
		.fill("#login-form input[name=password]",pass)
		.pressButton('#login-form button',function(){
			if ( browser.success ) {
				callback(null, true);
			} else {
				callback(new Error('Not success'));
			}
		});
	});

};

EsFriki.prototype.post = function (text, callback) {

	var browser = this.browser;

	browser.visit("http://esfriki.com/", function () {
		browser
			.fill('textarea[name="content"]', text)
			.pressButton('Publicar', function () {
				if (browser.success) {
					callback(null, browser.location);
				} else {
					callback(new Error("not success"));
				}
		});

	});

};

module.exports = EsFriki;
