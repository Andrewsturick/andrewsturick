angular.module('Andrew-Sturick')
      .controller('DevPortCtrl', function($scope, backgroundService){

        $scope.arrowNavs = {
          financial: {title: 'financial', 'ui-sref': 'portfolios.financial', arrowClasses:['fa', 'fa-arrow-circle-left'], arrowState: "left", showing: true},
          development: {title: 'development', 'ui-sref':'portfolios.development', arrowClasses: ['fa', 'fa-arrow-circle-right'], arrowState: "right", showing: true }
        }
        $('body').css({'background-image': 'url("")'});
        $('#portfolio-development-title').css({'color': 'black'})
        // $backgroundService.setToSkyline()
        $scope.socialLinks = {
           "Linkedin" : {title: "LinkedIn", classes:['fa','fa-linkedin', 'social-icon'], href: "https://www.linkedin.com/in/andrewsturick"},
           "Twitter"  : {title: "Twitter", classes: ['fa','fa-twitter', 'social-icon'], href: "https://twitter.com/drewsturick"},
           "Github"   : {title: "Github", classes: ['fa', 'fa-github-square social-icon', 'social-icon'], href:"https://github.com/andrewsturick"},
           "Stack Overflow": {title: "Stack Overflow", classes: ['fa', 'fa-stack-overflow', 'social-icon'], href: ""}
        }
      })
