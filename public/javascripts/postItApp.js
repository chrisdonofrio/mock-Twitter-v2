var app = angular.module('postItApp', ['ngRoute']);

app.config(function($routeProvider){
	$routeProvider
	// post display
	.when('/', {
		templateURL: 'main.html',
		controller: 'mainController'
	})
		// login display
	.when('/login', {
		templateURL: 'login.html',
		controller: 'authController'
	})
		// registration display
	.when('/register', {
		templateURL: 'register.html',
		controller: 'authController'
	});
});

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

// reuse one controller to access two different functions (login and reg)
app.controller('authController', function($scope){
	$scope.user = {username: '', password: ''};
	// error message to user for failed auth
	$scope.error_message = '';

	$scope.login = function(){
		// placeholder for auth implementation
		$scope.error_message = 'login request for ' $scope.user.username;
	};
	$scope.register = function(){
		$scope.error_message = 'registration request for ' $scope.user.username;
	};
})