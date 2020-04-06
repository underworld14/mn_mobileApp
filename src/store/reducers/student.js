let initialState = {
  isLoading: false,
  summary: [],
  hostel: [],
  data: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'GET_SUMMARY_PENDING':
      return {
        ...state,
        isLoading: true,
      };

    case 'GET_SUMMARY_FULLFILLED':
      return {
        ...state,
        isLoading: false,
        summary: action.payload,
      };

    case 'GET_SUMMARY_REJECTED':
      return {
        ...state,
        isLoading: false,
      };

    default: {
      return state;
    }
  }
};
