var express = require('express');
var router = express.Router();

// /* GET Userlist page. */
// router.get('/userlist',function(req,res){
	// var db = req.db;
	// var collection = db.get('usercollection');
	// collection.find({},{},function(e,docs){
		// res.render('userlist',{
			// "userlist": docs
		// });
	// });
// });

// router.get('/collaborateurs/:id/edit', function(req,res){
	// var db = req.db;
	// var collection = db.get('usercollection');
	// var user = collection.findOne({_id:new require('mongodb').ObjectID(req.params.id)});
	// res.render('editCollaborateur/',{title: 'Edit a user', user: user})
// });

module.exports = router;
