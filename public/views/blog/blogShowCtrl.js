angular.module('Andrew-Sturick')
      .controller('blogShowCtrl', function($state, $scope, BlogService){
        $scope.blogOnDisplay = BlogService.blogList[$state.params.blogId]

      })
