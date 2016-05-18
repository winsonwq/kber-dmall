
var Dispatcher = require('./dispatcher');
var Template = require('./template');
var Action = require('./action');
var formSerialize = require('form-serialize');

var LoginView = createView({

  events: {
    '.btn-login-form:submit': 'loginSubmit'
  },

  template: Template.from('login.tpl.js')

  initialize() {
    this.state = {};
    Dispatcher.on('loginFail', this.loginFail);
  },

  loginFail() {
    this.state.error = resp.body;
    this.render();
  },

  loginSubmit(evt) {
    evt.preventDefault();
    Action.doLogin(formSerialize(evt.target));
  }

});
