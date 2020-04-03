let initialState = {
  isLoading: false,
  isError: false,
  isLogin: false,
  token: '',
  userPin: '',
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
        pin: '',
        credentials: {},
      };

    case 'SET_PIN':
      return {
        ...state,
        pin: action.payload,
      };

    case 'REMOVE_PIN':
      return {
        ...state,
        pin: '',
      };

    default: {
      return state;
    }
  }
};
