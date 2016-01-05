angular.module('naveapps', ['naveapps.controllers', 'ngRoute', 'firebase'])

.config(function($routeProvider, $locationProvider) {

	$routeProvider

	.when('/chat', {
		templateUrl: '/www/chat.html',
		controller: 'ChatCtrl'
	})

	.when('/chat', {
		templateUrl: '/www/graficos.html',
		controller: 'HomeCtrl'
	})
})