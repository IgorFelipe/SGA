angular.module("GereciamentoAtletas").config(function ($routeProvider){
	
	$routeProvider.when("/listaAtleta",{
		templateUrl: "view/listaAtletas.html",
		controller:"AtletasCtrl"
	});

	$routeProvider.when("/novoAtleta",{
		templateUrl: "view/novoAtleta.html",
		controller:"NovoAtletaCtrl"
	});

	$routeProvider.when("/detalheAtleta",{
		templateUrl: "view/detalhesAtleta.html",
		controller:"DetalhesAtletaCtrl"
	});

	$routeProvider.otherwise({redirectTo:"/listaAtleta"});
})
