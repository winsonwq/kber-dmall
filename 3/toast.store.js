
var Dispatcher = require('./dispatcher');

var ServerErrorStore = createStore({

  initialize() {
    Dispatcher.on('fillServerError', this.fillServerError);
    this.data = {};
  },

  fillServerError(data) {
    this.data = { status: data.status, error: data.message };
    this.emit('serverErrorChange', this.data);
  }

});
