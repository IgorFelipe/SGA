angular.module("GereciamentoAtletas").controller("NovoAtletaCtrl",['$scope', '$http', function($scope, $http){
        //variavel global para os arquivos para upload
        var files;
        //prepara as imagem a serem enviadas
        function prepareUpload(event)
        {
            files = event.target.files;
        }
        //Verificação por jQuery se a imagem foi Alterada
        //Chama a função prepateUpload
        $('#imagem').on('change', prepareUpload);
        
        //Processo Iniciado assim que o botão Adicionar atleta é acionado
        //Faz o Processo de fazer upload da imagem e de Incluir no Sistema o Atleta
        //Retorna Abrindo Mensagens de Sucesso ou de Falha
        $scope.uploadFile = function(atleta) {
	        if(uploadImage(atleta)){
                /*if(addAtleta(atleta)){
                    alert("sucesso no cadastro");
                }else{
                    alert("erro no cadastro");
                }*/
            }else{
                    alert("erro no cadastro");
                }
        };
        
        //Funcção que Chama uma requisição do Servidor passando O Atleta a Ser Adicionado
        var addAtleta = function(atleta){
             var erro = false;
            $.ajax({
                type:"POST",
                url: "../server/novoAtleta.php?atleta",
                dataType:"json",
                data: {atleta: atleta},
                success: function(data){
                    console.log("success addAtleta Output:");
                    console.log( data );
                },
                error: function(data){
                     console.log("erro addAtleta Output:");
                     console.log( data );
                     erro = true;
                }
            });
            
            if(!erro){
                return true;
            }
            return false;
        }
        
        //Função que faz o Upload da Imagem atraves de jquey e FormData 
        var uploadImage = function(atleta){
         
            var data = new FormData();
            var erro = false;
            $.each(files, function(key, value)
            {
                data.append(key, value);
            });
            $.each(atleta, function(key, value)
            {
                data.append(key, value);
            });
            $.ajax({
                type: "POST",
                url: "../server/novoAtleta.php?files",
                data: data,
                cache:false,
                dataType: 'json',
                enctype: 'multipart/form-data',
                processData: false,  // tell jQuery not to process the data
                contentType: false,   // tell jQuery not to set contentType
                success: function(data){
                    console.log("success Image Output:");
                    console.log( data );
                },
                error: function(data){
                     console.log("erro Image Output:");
                     console.log( data );
                     erro = true;
                }
            });
            if(!erro){
                return true;
            }
            return false;
        }   
     
        
}]);




