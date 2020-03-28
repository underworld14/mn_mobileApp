let initialState = {
  isLoading: false,
  isError: false,
  isLogin: false,
  token: '',
  credentials: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_PENDING': {
      return {
        ...state,
        isLoading: true,
      };
    }

    case 'LOGIN_FULFILLED':
      return {
        ...state,
        isLogin: true,
        isLoading: false,
        credentials: action.payload,
      };

    case 'LOGOUT':
      return {
        ...state,
        isLogin: false,
        token: '',
        credentials: {},
      };

    default: {
      return state;
    }
  }
};
