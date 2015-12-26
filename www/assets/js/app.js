angular.module('naveapps', ['naveapps.controllers', 'ngRoute', 'firebase'])

.config(function($routeProvider, $locationProvider) {

	$routeProvider

	.when('/chat', {
		templateUrl: '/www/chat.html',
		controller: 'ChatCtrl'
	})
})

.factory('Likes', function ($firebaseArray) {
	var itemRef = new Firebase("https://naveorg.firebaseio.com/");
	return $firebaseArray(itemRef);
})