angular.module('Andrew-Sturick')
      .service('BlogService', function(){
        this.blogList =  {
          '1': {
             id: '1'
          ,  title: 'hello world'
          ,  date: '1/15/16'
          ,  description: 'First blog/introduction'
          ,  ref: '/blogs/hello.md'
          },
          '2': {
             id: '2'
          ,  title: 'jquery animations with angular'
          ,  date: '1/15/16'
          ,  description: 'jquery animations with angular'
          ,  ref: '/blogs/jqueryAngularAnimate.md'
          }

        }
      })
