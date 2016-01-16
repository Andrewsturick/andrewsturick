angular.module('Andrew-Sturick')
      .directive('devPortfolio', function(){
        return {
          restrict: 'E',
          templateUrl: "views/portfolios/devPortfolio.html",
          link: function($scope){
        },
          controller: function($scope,portfolioService){
           $scope.portfolioContents = portfolioService.returnPortfolioContents();
           $scope.isShowing = $scope.portfolioContents["Options.js"];

           $scope.showThisPiece = function(exposedPiece){
             $scope.isShowing = $scope.portfolioContents[exposedPiece];
           }
          }
        }
      })
