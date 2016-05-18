
var Template = require('./template');
var Action = require('./action');
var formSerialize = require('form-serialize');
var ServerErrorStore = require('./server-error.store');
var UserStore = require('./user.store');

var LoginView = createView({

  events: {
    '.btn-login-form:submit': 'loginSubmit'
  },

  template: Template.from('login.tpl.js'),

  initialize() {
    this.data = {};
    ServerErrorStore.on('serverErrorChange', this.serverErrorChange);
    UserStore.on('userChange', this.userChange);
  },

  serverErrorChange(error) {
    this.data.error = error;
    this.render();
  },

  userChange(userInfo) {
    this.data.user = userInfo;
    this.render();
  },

  loginSubmit(evt) {
    evt.preventDefault();
    Action.doLogin(formSerialize(evt.target));
  }

});
