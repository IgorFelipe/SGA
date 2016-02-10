angular.module("GereciamentoAtletas").controller("AtletasCtrl",function($scope,$filter,$location){
	$scope.app = "Gereciamento de Atletas",
	$scope.atletas = [
	{id:1,nome:"IGOR FELIPE RODRIGUES DO VALLE", categoria:"ADULTO", registro: "000.000.00000.00",
		estudante:"NÃO", exame:"22/22/2222", apto:"NÃO", pesagem:"22/22/2222"},
	{id:2,nome:"MARCOS AUGUSTO CRUZ SCARIOT", categoria:"MIRIM", registro: "014.495.523916.02",
		estudante:"SIM", exame:"22/22/2222", apto:"SIM", pesagem:"22/22/2222"},
	{id:3,nome:"ANNA carla freitas s. de pontes",categoria:"MIRIM",registro: "100.0114.2015",
		estudante:"SIM", exame:"22/22/2222", apto:"SIM", pesagem:"22/22/2222"},
	{id:4,nome:"cesar augusto silva de oliveira", categoria:"INFANTIL", registro: "014.495.523906.02",
		estudante:"SIM", exame:"22/22/2222", apto:"SIM", pesagem:"22/22/2222"},
	{id:5,nome:"MATEUS cubas de souza", categoria:"MIRIM", registro: "014.495.524244.02",
		estudante:"SIM", exame:"22/22/2222", apto:"SIM", pesagem:"22/22/2222"}
	];


	$scope.ordenarPorNome = function(campo){

		$scope.criterioDeOrdenacao = campo;

		$scope.direcaoDaOrdenacao = !$scope.direcaoDaOrdenacao;
	}

	$scope.adicionarAtleta = function() {
		$location.path("/novoAtleta");
	}

	$scope.detalheAtleta = function(atleta) {
		$location.path("/detalheAtleta");
	}
});