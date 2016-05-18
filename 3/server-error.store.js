
var Dispatcher = require('./dispatcher');

var ToastStore = createStore({

  initialize() {
    Dispatcher.on('fillToastData', this.fillToastData);
    this.data = { history: [] };
  },

  fillToastData(data) {
    var history = this.data.history.slice(0);
    history.push(data);

    this.data = { history: history };
    this.emit('toastMessageChange', data);
  }

});
