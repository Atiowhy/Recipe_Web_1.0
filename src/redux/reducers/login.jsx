const initialState = {
  data: null,
  isLoading: false,
  isError: false,
};

const loginReducer = (state = initialState, action) => {
  if (action.type === 'AUTH_LOGIN_PENDING') {
    return {
      ...state,
      isLoading: true,
    };
  } else if (action.type === 'AUTH_LOGIN_SUCCESS') {
    return {
      ...state,
      data: action.payload,
      isLoading: false,
      message: '',
      isError: false,
    };
  } else if (action.type === 'AUTH_LOGIN_FAILED') {
    return {
      ...state,
      data: null,
      message: '',
      isLoading: false,
      isError: true,
    };
  } else {
    return {
      state,
    };
  }
};

export default loginReducer;
