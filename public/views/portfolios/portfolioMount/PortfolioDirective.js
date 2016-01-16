angular.module('Andrew-Sturick')
      .directive('portfolioDirective', function(){
         return {
           restrict: "E"
        ,  templateUrl: "views/portfolios/portfolioMount/PortfolioDirective.html"
        ,  scope: {
        
        }
        ,  transclude: true
        ,  controller: function($scope){
            $scope.fileInput='';
            $scope.$watch(function(){
                return $scope.fileInput
            }, function(n,o){
              console.log(n,o)
            })
        }
      }
    })
