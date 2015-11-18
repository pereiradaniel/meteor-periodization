Router.configure({
  layoutTemplate: 'MasterLayout',
  loadingTemplate: 'Loading',
  notFoundTemplate: 'NotFound'
});


Router.route('/', {
  name: 'home',
  controller: 'HomeController',
  where: 'client'
});

Router.map(function(){
	this.route('periodizer');
	this.route('chart');
	this.route('setExercises');
	this.route('signIn');
});