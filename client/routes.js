'use strict';

Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading'
});

Router.route('/', function () {
  this.redirect('/home');
});

Router.route('/home', function () {
  this.render('home');
});

Router.route('/about', function () {
  this.render('about');
});
