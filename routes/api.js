var express = require('express');
var router = express.Router();

router.route('/posts')

	// returns all posts
	.get(function(req, res){

		// temporary solution
		res.send({message: 'TODO return all posts'});
	})

	.post(function(req, res){

		res.send({message: 'TODO create a new post'});
	});

router.route('/posts/:id')
	// return particular post
	.get(function(req, res){

		res.send({message: 'TODO return post with ID ' + req.params.id})
	})

	// update existing post
	.put(function(req, res){

		res.send({message: 'TODO modify post with ID ' + req.params.id})
	});

	// delete existing post
	.delete(function(req, res){
		
		res.send({message: 'TODO delete post with ID ' + req.params.id})
	});

module.exports = router;
