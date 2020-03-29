export const login = email => {
  return (dispatch, getState) => {
    dispatch({ type: 'LOGIN_FULFILLED', payload: { email } });
  };
};

export const logOut = () => {
  return (dispatch, getState) => {
    dispatch({ type: 'LOGOUT' });
  };
};
