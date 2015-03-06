'use strict';

Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading'
});

Router.route('/', function () {
  this.render('home');
});

Router.route('/about', function () {
  this.render('about');
});

Router.route('/places', function () {
  this.render('places');
});
