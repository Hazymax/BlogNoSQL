var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET Hello World page. */
router.get('/helloworld',function(req,res){
	res.render('helloworld',{title:'Hello,World'})
});

/* GET Userlist page. */
router.get('/userlist',function(req,res){
	var db = req.db;
	var collection = db.get('usercollection');
	collection.find({},{},function(e,docs){
		res.render('userlist',{
			"userlist": docs
		});
	});
});

router.get('/collaborateursEdit', function(req,res){
	var url = require('url');
	var url_parts = url.parse(req.url, true);
	var query = url_parts.query;
	query = query.substr(3,query.length)
	var db = req.db;
	var collection = db.get('usercollection');
	collection.findOne({_id:query},function(err,docs){
		console.log(docs);
		res.render('editCollaborateur',{"user_res" : docs});
	});
	// res.render('editCollaborateur',{title: 'Edit a user', user_res:user});
});

module.exports = router;
