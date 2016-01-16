angular.module('Andrew-Sturick')
      .service('portfolioService', function(){
        this.contents = {
           "Options.js" : {
            name: "Options.js"
          , picture: "optionsJsLog.jpg"
          , link: "githubpage.com"
          , summary: "api and library to derive sophisticated options data from basic option chains"
          , date: "January, 2016"
          , objRef: "Options.js"
        } ,
           "tpbApp": {
              name: "Trailer Park Boys API"
            , picture: "tpb.jpg"
            , link: "tpbapi.com"
            , summary: "All your trailer park boys data needs "
            , date: "December, 2015"
            , objRef:"tpbApp"
        } ,
            "weather-app": {
              name: "Weather App"
            , picture: "weatherPic.jpg"
            , summary: "weather Application"
            ,  date  :"November: 2015"
            , objRef:"weather-app"
        } , "towers": {
              name: "Towers of Hanoi"
            , picture: "towers.jpg"
            , link: "www.githubpages.com-towers of hanoi"
            , summary: "Jquery representation of the classic game"
            , date: "October, 2015"
            , objRef:"towers"
        }, "hello": {
              name: "Towers of Hanoi"
            , picture: "towers.jpg"
            , link: "www.githubpages.com-towers of hanoi"
            , summary: "Jquery representation of the classic game"
            , date: "October, 2015"
            , objRef:"towers"
        }
      }
        this.returnPortfolioContents = function(){
          return this.contents;
        }

      })
