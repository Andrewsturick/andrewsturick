angular.module('Andrew-Sturick')
      .controller('PortfoliosCtrl', function($scope, $state, $timeout,$location){

        $('body').css({'background-image': "url('styles/skyline.jpg')"})
        $scope.arrowNavs = {
          financial: {title: 'financial', 'ui-sref': 'portfolios.financial', arrowClasses:['fa', 'fa-arrow-circle-left'], arrowState: "left", showing: true},
          development: {title: 'development', 'ui-sref':'portfolios.development', arrowClasses: ['fa', 'fa-arrow-circle-right'], arrowState: "right", showing: true }
        }

        //////PUT IN SERVICE!!!!!
        $scope.socialLinks = {
           "Linkedin" : {title: "LinkedIn", classes:['fa','fa-linkedin', 'social-icon'], href: "https://www.linkedin.com/in/andrewsturick"},
           "Twitter"  : {title: "Twitter", classes: ['fa','fa-twitter', 'social-icon'], href: "https://twitter.com/drewsturick"},
           "Github"   : {title: "Github", classes: ['fa', 'fa-github-square social-icon', 'social-icon'], href:"https://github.com/andrewsturick"},
           "Stack Overflow": {title: "Stack Overflow", classes: ['fa', 'fa-stack-overflow', 'social-icon'], href: ""}
        }
        $scope.isShowing = {
          financial: {
            title: true,
            arrow: true,
            portfolio:false
          },
          development: {
            title: true,
            arrow: true,
            portfolio: false
          }
        }

        $scope.financialTextIsShowing = function(){
        return   $scope.isShowing.financial.title
        }
        $scope.financialArrowIsShowing = function(){
          return $scope.isShowing.financial.arrow
        }
        $scope.financialPortfolioIsShowing = function(){
          return $scope.isShowing.financial.portfolio
        }
        $scope.leftDivIsDevelopment = function(){
          return "development";
        }
        $scope.developmentTextIsShowing = function(){
          return $scope.isShowing.development.title;
        }
        $scope.developmentPortfolioIsShowing = function(){
            return $scope.isShowing.development.portfolio
        }
        $scope.handleFlipEvent  = function(e, title){
          if ($scope.arrowNavs[title].arrowState=="right" && title =="development"){
            $(e.target).addClass('.slideDevelopmentLeft');
            $(e.target).animate({ marginLeft: '-25.5vh', opacity: 1 }, 1500 , "swing");
            $('#portfolio-development-title').animate({ marginLeft: '-56.15vh'}, 1500 , "swing");
            $('#portfolio-financial-nav').addClass('anim-right');
              $scope.isShowing.financial.title = false;
              $timeout(function(){
                $scope.isShowing.financial.arrow = false
              }, 1900);
              $timeout(function(){
                $state.go('development')
              }, 2300)
          }
          if($scope.arrowNavs[title].arrowState=="left" && title=="financial"){
            $(e.target).addClass('.slide-financial-right');
            $('#portfolio-financial-nav').animate({ position: "relative", marginRight: '-45.15vw'}, 1500 , "swing");
            $('#portfolio-development-nav').addClass('anim-left');
            $scope.isShowing.development.title = false;
            $timeout(function(){
              $scope.isShowing.development.arrow = false;
              $scope.isShowing.development.portfolio = true;
            },1200)
            $timeout(function(){
              $('#portfolio-development-nav').animate({ marginLeft: '-4.0vh'}, 1200 , "swing");
              $('#portfolio-development-nav').animate({ marginBotton: '-4.8vh'}, 1200 , "swing");
            },1500)
            $timeout(function(){
              $location.path('/financial')
            }, 3000)
          }
        }

        $scope.clickFlipLeft = function(e, title){
          $(e.target).addClass('anim-left')
        }
})
