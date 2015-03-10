Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading'
});

Router.route('/', function () {
  this.render('home');
});

Router.route('/about');

Router.route('/places');
