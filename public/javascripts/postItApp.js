var app = angular.module('postItApp', []);

app.controller('mainController', function($scope){
	// attach 'posts' array to $scope to store created posts
	$scope.posts = [];
	// store information on posts being created
	// i.e. the name of the post's author, the text of the message created by the author, and date posted
	$scope.newPost = {post_author: '', post_text: '', date_posted: ''};

	// function pushing contents of 'newPost' to 'posts' array
	$scope.post = function(){
		// making sure new post has current timestamp
		$scope.newPost.date_posted = Date.now();
		$scope.posts.push($scope.newPost);
		// reset new post
		$scope.newPost = {post_author: '', post_text: '', date_posted: ''};
	};
});