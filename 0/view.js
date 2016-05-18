
var Dispatcher = require('./dispatcher');
var Template = require('./template');
var Action = require('./action');
var formSerialize = require('form-serialize');

var LoginView = createView({

  events: {
    '.btn-login-form:submit': 'loginSubmit'
  },

  initialize() {
    this.state = {};
  },

  loginSubmit(evt) {
    evt.preventDefault();
    Action.doLogin(formSerialize(evt.target)).catch(this.loginFail);
  },

  loginFail(resp) {
    this.state.error = resp.body;
    this.render();
  },

  template: Template.from('login.tpl.js')

});
