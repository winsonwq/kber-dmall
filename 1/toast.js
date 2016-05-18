
var Dispatcher = require('./dispatcher');
var Template = require('./template');

var Toast = createView({

  initialize: function() {
    Dispatcher.on('showToast', this.render);
  },

  template: Template.from('toast.tpl.js')

});
