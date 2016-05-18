
var ToastStore = require('./dispatcher');
var Template = require('./template');

var Toast = createView({

  initialize: function() {
    ToastStore.on('toastMessageChange', this.render);
  },

  template: Template.from('toast.tpl.js')

});
