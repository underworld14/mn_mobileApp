let initialState = {
  isLoading: false,
  isLogin: false,
  userPin: '',
  token: '',
  credentials: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'LOADING': {
      return {
        ...state,
        isLoading: true,
      };
    }

    case 'LOADING_FALSE': {
      return {
        ...state,
        isLoading: false,
      };
    }

    case 'SET_TOKEN':
      return {
        ...state,
        token: action.payload,
      };

    case 'LOGIN_FULFILLED':
      return {
        ...state,
        isLogin: true,
        isLoading: false,
        credentials: action.payload,
      };

    case 'LOGIN_REJECTED':
      return {
        ...state,
        isLogin: false,
        isLoading: false,
      };

    case 'LOGOUT':
      return {
        ...state,
        isLogin: false,
        userPin: '',
        credentials: {},
      };

    case 'SET_PIN':
      return {
        ...state,
        userPin: action.payload,
      };

    case 'REMOVE_PIN':
      return {
        ...state,
        userPin: '',
      };

    case 'UPDATE_USER_FULFILLED':
      return {
        ...state,
        isLoading: false,
      };

    case 'GET_ME_FULFILLED':
      return {
        ...state,
        isLoading: false,
        credentials: action.payload,
      };

    default: {
      return state;
    }
  }
};
