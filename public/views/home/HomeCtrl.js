angular.module('Andrew-Sturick')
      .controller('HomeCtrl', function($scope){
        $scope.socialLinks = {
           "Linkedin" : {title: "LinkedIn", classes:['fa','fa-linkedin', 'social-icon'], href: "https://www.linkedin.com/in/andrewsturick"},
           "Twitter"  : {title: "Twitter", classes: ['fa','fa-twitter', 'social-icon'], href: "https://twitter.com/drewsturick"},
           "Github"   : {title: "Github", classes: ['fa', 'fa-github-square social-icon', 'social-icon'], href:"https://github.com/andrewsturick"},
           "Stack Overflow": {title: "Stack Overflow", classes: ['fa', 'fa-stack-overflow', 'social-icon'], href: ""}
        }
        $scope.homeArrows = {
          "leftArrow" : {arrowClasses: ['fa','fa-arrow-circle-left'], title: 'Blog'},
          "downArrow" : {arrowClasses: ['fa','fa-arrow-circle-down'], title: 'Portfolio(s)'},
          "rightArrow" : {arrowClasses: ['fa','fa-arrow-circle-right'], title: 'D3.js and Three.js' }
        }
        $scope.myName = "ANDREW STURICK";
        $scope.jobTitle = "FUll STACK JAVASCRIPT DEVElOPER / EQUITY-OPTIONS TRADER";
      })
