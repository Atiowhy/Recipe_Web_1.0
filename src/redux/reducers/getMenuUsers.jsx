const initialState = {
  data: [],
  message: '',
  isLoading: false,
  isError: false,
};

const getMenuUsersReducer = (state = initialState, action) => {
  if (action.type === 'GET_MENU_USERS_PENDING') {
    return {
      ...state,
      isLoading: true,
    };
  } else if (action.type === 'GET_MENU_USERS_SUCCESS') {
    return {
      ...state,
      data: action.payload,
      isLoading: false,
      message: '',
      isError: false,
    };
  } else if (action.type === 'GET_MENU_USERS_FAILED') {
    return {
      ...state,
      message: action.payload,
      isLoading: false,
      isError: true,
    };
  } else {
    return state
  }
};

export default getMenuUsersReducer
