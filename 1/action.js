var Dispatcher = require('./dispatcher');

var Action = {
  doLogin(loginData) {
    var promise = doLoginRequest(loginData);
    promise.then(loginSuccess, loginFail);

    return promise;
  }
};

function loginSuccess(resp) {
  Dispatcher.emit('redirect', { id: resp.body.id });
  Dispatcher.emit('showToast', { message: '登陆成功' })
}

function loginFail(resp) {
  var error = { status: resp.status, message: resp.body };
  Dispatcher.emit('showGlobalErrorMessage', error);
  Dispatcher.emit('loginFail', resp);
}
