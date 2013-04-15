
/*
 * GET users listing.
 */

exports.list = function(req, res){
  res.send("Here we should list all the users.");
};

exports.user = function(req, res){
	res.send('user:' + req.params.username);
}