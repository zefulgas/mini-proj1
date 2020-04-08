	// create the module and name it scotchApp
	var scotchApp = angular.module('scotchApp', ['ngRoute']);

	// configure our routes
	scotchApp.config(function($routeProvider) {
		$routeProvider

			// route for the home page
			.when('/', {
				templateUrl : 'pages/home.html',
				controller  : 'mainController'
			})

			// route for the about page
			.when('/quemsou', {
				templateUrl : 'pages/quemsou.html',
				controller  : 'quemsouController'
			})

			// route for the contact page
			.when('/oquefaco', {
				templateUrl : 'pages/oquefaco.html',
				controller  : 'oquefacoController'
			})
			// route for the contact page
			.when('/hobbies', {
				templateUrl : 'pages/hobbies.html',
				controller  : 'hobbiesController'
			}
			);
	});

	// create the controller and inject Angular's $scope
	scotchApp.controller('mainController', function($scope) {
		// create a message to display in our view
		$scope.message = 'Mensagem Home: Na Tarefa 2.2 deveis contribuir para o debate em geral, comentando e opinando (sustentadamente, tal como nas alíneas anteriores) as intervenções dos colegas, e apoiando os colegas na resolução de dúvidas, usando para o efeito o fórum da tarefa.';
	});

	scotchApp.controller('quemsouController', function($scope) {
		$scope.message = 'Curriculum: Sou o José, tenho o número 1901710 do MW.';
	});
	
	scotchApp.controller('oquefacoController', function($scope) {
		$scope.message = 'O que faço: Procuro fazer o que me realiza física, consciente e inconscientemente (no contexto de Gustav Jung).';
	});

	scotchApp.controller('hobbiesController', function($scope) {
		$scope.message = 'Hobbies: Tudo o que permita manter "Mens sana in corpore sano" (Juvenal).';
	});
