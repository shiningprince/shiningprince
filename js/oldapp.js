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

	// $urlRouterProvider.when('', '/home');

	// use the HTML5 History API
	// $locationProvider.html5Mode(true);
	// $urlRouterProvider.otherwise('/404');
});

app.controller('HomeController', function($scope, $location, $anchorScroll){
	angular.element(document).ready(function() {
		$location.hash("");
		$anchorScroll();
		angular.element('.carousel').carousel();

		// var carousel = document.querySelector('.carousel');
		// for (var i = carousel.children.length; i >= 0; i--) {
		// 	console.log('hello');
		// 	console.log(carousel.children[Math.random() * i | 0]);
		//     carousel.appendChild(carousel.children[Math.random() * i | 0]);
		// }
	}); 
	// Used to try to randomize the carousel images
	// Papa.parse("data/client-images.csv", {
	// 	download: true,
	// 	header: true,
	// 	complete: function(results) {
	// 		console.table(results.data);
	// 		$scope.imgs = results.data;
	// 		$scope.$apply();
	// 	}
	// });

	// $scope.random = function() {
	// 	return 0.5 - Math.random();
	// };

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
