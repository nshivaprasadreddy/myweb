var myapp = angular.module('myapp', [
    'ngRoute'
]);

myapp.config(['$locationProvider', function ($locationProvider) {
    $locationProvider.hashPrefix('');
}]);

myapp.config(['$routeProvider', function($routeProvider){
    $routeProvider
      .when('/', {
          templateUrl: 'src/pages/about.html'
      })
      .when('/projects', {
          templateUrl: 'src/pages/projects.html'
      })
     .when('/blog', {
          templateUrl: 'src/pages/blog.html'
      })
      .when('/resume', {
          templateUrl: 'src/pages/resume.html'
      })
      .when('/contact', {
          templateUrl: 'src/pages/contact.html'
      })
      .otherwise({
         redirectTo: '/'
      });
}]);