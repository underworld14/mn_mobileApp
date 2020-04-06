let initialState = {
  isLoading: false,
  data: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'GET_NEWS_PENDING':
      return {
        ...state,
        isLoading: true,
      };

    case 'GET_NEWS_FULLFILLED':
      return {
        ...state,
        isLoading: false,
        data: action.payload,
      };

    case 'GET_NEWS_REJECTED':
      return {
        ...state,
        isLoading: false,
      };

    default: {
      return state;
    }
  }
};
