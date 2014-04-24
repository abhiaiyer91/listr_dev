'use strict';
 
app.controller('OrderViewCtrl', function ($scope, $routeParams, Post) {
 
    $scope.post = Post.find($routeParams.postId);
 
  });