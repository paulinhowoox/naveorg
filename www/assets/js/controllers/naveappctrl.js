angular.module('naveapps.controllers', ['firebase'])

.controller('HomeCtrl', function($scope, $http, $firebaseArray){
	var itemRef = new Firebase("https://naveorg.firebaseio.com/");

	$scope.title = "Nave Org";
	$scope.naveapps = $firebaseArray(itemRef);
	$scope.likes = 0;

	loadCloudData();

    $scope.loadLocalData = function () {
        loadLocalData();
        Materialize.toast('Dados carregados localmente!', 4000);
    };

	$scope.saveData = function(ofertas){
		saveData();

		Materialize.toast('Curtiu isso!', 4000);
	};

	$scope.unsaveData = function(){
		unsaveData();
		//Materialize.toast('Descurtiu isso!', 4000);
	};

	$scope.addLikes = function (ofertas){
			$scope.likes.$save(ofertas);
			//ofertas.likes += 1;
	};

	$scope.minusLikes = function (ofertas){
		ofertas.likes = true;
		ofertas.likes -= 1;
	};

	function loadCloudData(){
		$http.get('data/vereadores.json')
			.success(function (data){
				$scope.naveapps = angular.fromJson(data);
		})
			.catch(function(){
				alert('Falhou o carregamento dos dados!');
			})
	};

	function loadLocalData() {
        $scope.naveapps = angular.fromJson(localStorage.getItem('naveapps'));
    };

	function saveData(){
		localStorage.setItem('naveapps', angular.toJson($scope.naveapps));
	};

	function unsaveData(){
		localStorage.removeItem('naveapps', angular.toJson($scope.naveapps));
	};
})

.controller('ChatCtrl', function($rootScope, $location){
	$rootScope.activetab = $location.path();	
})