var GlobalErrorMessage = require('./global-error-message');
var ToastMessage = require('./toast-message');
var Router = require('./router');

var Action = {
  doLogin(loginData) {
    var promise = doLoginRequest(loginData);
    promise.then(function success(resp) {

        var userInfo = resp.body;
        Router.goto('user.profile', { id: userInfo.id });
        ToastMessage.show({ message: '登陆成功' });

      }, function fail(resp) {

        var error = { status: resp.status, message: resp.body };
        GlobalErrorMessage.show(error);

      });

    return promise;
  }
};
