const initialState = {
  data: null,
  messgae: '',
  isLoading: false,
  isError: false,
};

const menuDetailReducer = (state = initialState, action) => {
  if (action.type === 'GET_MENU_DETAIL_PENDING') {
    return {
      ...state,
      isLoading: true,
    };
  } else if(action.type === "GET_MENU_DETAIL_SUCCESS"){
        return{
            ...state,
            data: action.payload,
            isLoading: false,
            message: '',
            isError: false
        }
  } else if(action.type === "GET_MENU_DETAIL_FAILED"){
    return{
        ...state,
        data: null,
        message: action.payload,
        isLoading: false,
        isError: true
    }
  } else {
    return state
  }
};

export default menuDetailReducer
