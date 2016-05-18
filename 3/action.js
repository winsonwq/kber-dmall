
var Action = createAction('loginSubmit$',
  function(loginSubmit$) {

    const didLogin$ = loginSubmit$.flatMapLatest(doLoginRequest);
    const [didLoginSuccess$, didLoginFail$] = WhenAndOtherwise(didLogin$, resp => resp.ok);

    const didLoginSuccessRedirect$ = didLoginSuccess$
      .map(resp => ({ route: 'user.profile', data: { id: resp.body.id } }));

    const didLoginSuccessToast$ = didLoginSuccess$
      .map({ message: '登陆成功' });

    const didLoginFailError$ = didLoginFail$
      .map(resp => ({ status: resp.status, message: resp.body }));

    return {
      didLoginSuccessRedirect$,
      didLoginSuccessToast$,
      didLoginFailError$
    };

  });
