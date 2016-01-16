angular.module('Andrew-Sturick')
.controller('blogIndexCtrl', function($scope, BlogService){
  $scope.blogs = BlogService.blogList;
  $scope.blogPage = {
    title: "{{thetaDev}}",
   blogIntro: "musings of a lifelong student of web and financial development",
   blogSideQuote:   '"This is the campain to obtain robust knowledge in the development and financial spaces. I seek to bring users of financial technology the most interesting and enlightening experience imaginable"',
   blogIndexTitle: "RECENT BlOG TOPICS"
  }
  $scope.socialLinks = {
     "Linkedin" : {title: "LinkedIn", classes:['fa','fa-linkedin', 'social-icon'], href: "https://www.linkedin.com/in/andrewsturick"},
     "Twitter"  : {title: "Twitter", classes: ['fa','fa-twitter', 'social-icon'], href: "https://twitter.com/drewsturick"},
     "Github"   : {title: "Github", classes: ['fa', 'fa-github-square social-icon', 'social-icon'], href:"https://github.com/andrewsturick"},
     "Stack Overflow": {title: "Stack Overflow", classes: ['fa', 'fa-stack-overflow', 'social-icon'], href: ""}
  }
})
