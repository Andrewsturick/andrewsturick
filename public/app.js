angular.module('Andrew-Sturick', ['ui.router','pageslide-directive', 'btford.markdown', 'ngSanitize'])
      .config(function($stateProvider, $urlRouterProvider, $locationProvider){
        $stateProvider
             .state('home', {
                url:'/home'
             ,  templateUrl: 'views/home/home.html'
             ,  controller: 'HomeCtrl'
             })
             .state('portfolios', {
               url: '/portfolios'
            ,   templateUrl: '/views/portfolios/portfolios.html'
            ,   controller: 'PortfoliosCtrl'
             })
             .state('development',{
                url: '/development'
            ,   templateUrl: 'views/portfolios/development.html'
            ,   controller: "DevPortCtrl"
           })
           .state('investments', {
               url:'/financial'
           ,   templateUrl: "views/portfolios/financial.html"
           ,   controller: "FinPortCtrl"
           })
           .state('blog', {
             url: '/blog'
          ,  templateUrl: 'views/blog/blog.html'
          ,  abstract: true
           })
           .state('blog.index', {
             url:'/'
          ,  templateUrl: '/views/blog/blogIndex.html'
          ,  controller: 'blogIndexCtrl'
           })
            .state('blog.show', {
              url:"/{blogId}"
            , templateUrl: "/views/blog/blogShow.html"
            , controller: 'blogShowCtrl'
            })
        $urlRouterProvider.otherwise('/home')
})
