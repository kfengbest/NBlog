
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Neutron' });
};

exports.login = function(req, res){
	res.send("login page");
}

exports.doLogin = function(req, res){
	res.send("doLogin page");
}

exports.logout = function(req, res){
	res.send("logout page");
}

exports.reg = function(req, res){
	res.send("register page");
}

exports.doReg = function(req, res){
	res.send("doReg page");
}

exports.post = function(req, res){
	res.send("post a log page");
}

