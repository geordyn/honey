angular.module("honey", ['ui.router'])

  .config(function($stateProvider, $urlRouterProvider) {

    $stateProvider

    .state('home', {
      url: '/home',
      templateUrl: '../home.html'
      })
    .state('about', {
      url: '/about',
      templateUrl: '../aboutus.html'
    })
    .state('products', {
      url: '/products',
      templateUrl: '../products.html'
    })
    $urlRouterProvider.otherwise('/home');
});
