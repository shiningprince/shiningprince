// Initializes the angular app
var app = angular.module('myApp', ['ui.router']);

// Configure app to give separate controller for home, and separate templateUrls for the various html fragment/templates
app.config(function($stateProvider, $locationProvider, $urlRouterProvider){
	$stateProvider
		.state('home', {
			url: '/home',
			templateUrl: "templates/home.html",
			controller: "HomeController"
		})
		.state('contact', {
			url: '/contact',
			templateUrl: 'templates/contact.html',
			controller: "ContactController"
		});

	$urlRouterProvider.when('', '/home');

	// use the HTML5 History API
	// $locationProvider.html5Mode(true);
	// $urlRouterProvider.otherwise('/404');
});

// Creates a controller for the home fragment/template, then parses through a csv file to get data
// to show on the page.  
// - $scope.mainUrl is used in the HTML to switch between static and gif image
// - $scope.$apply() is used because papa.parse is asynchronous and not angular, angular has it's own
// 	 event loop, but since papa.parse is not part of it, it doesn't automatically get updated with the 
// 	 rest of angular.  the $apply() tells angular to update for this controller
app.controller('HomeController', function($scope, $location, $anchorScroll){
	angular.element(document).ready(function() {
		$location.hash("");
		$anchorScroll();
		angular.element('.carousel').carousel();
	}); 

	angular.element(".button-collapse").sideNav();
});


app.controller("ContactController", function($scope, $location, $anchorScroll){
	angular.element(document).ready(function() {
		$location.hash("");
		$anchorScroll();
	}); 
});

var jApp = angular.module('japApp', ['ui.router']);

// Configure app to give separate controller for home, and separate templateUrls for the various html fragment/templates
jApp.config(function($stateProvider, $locationProvider, $urlRouterProvider){
	$stateProvider
		.state('jhome', {
			url: '/home',
			templateUrl: "templates/jHome.html",
			controller: "jHomeController"
		})
		.state('jcontact', {
			url: '/contact',
			templateUrl: 'templates/jContact.html',
			controller: "jContactController"
		});

	$urlRouterProvider.when('', '/home');

	// use the HTML5 History API
	// $locationProvider.html5Mode(true);
	// $urlRouterProvider.otherwise('/404');
});

jApp.controller('jHomeController', function($scope, $location, $anchorScroll){
	angular.element(document).ready(function() {
		$location.hash("");
		$anchorScroll();
		angular.element('.carousel').carousel();
	}); 

	angular.element(".button-collapse").sideNav();
});


jApp.controller("jContactController", function($scope, $location, $anchorScroll){
	angular.element(document).ready(function() {
		$location.hash("");
		$anchorScroll();
	}); 
});
