var jApp = angular.module('japApp', ['ui.router']);

// Configure app to give separate controller for home, and separate templateUrls for the various html fragment/templates
jApp.config(function($stateProvider, $locationProvider, $urlRouterProvider){
	console.log('hello2');
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
