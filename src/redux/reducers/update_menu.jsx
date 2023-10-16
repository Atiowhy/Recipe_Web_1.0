const initialState = {
    data : null,
    message: '',
    isLoading: false,
    isError: false
}

const updateMenuReducer = (state = initialState, action) => {
    if(action.type === "UPDATE_MENU_PENDING"){
        return{
            ...state,
            isLoading: true,
        }
    } else if(action.type === "UPDATE_MENU_SUCCESS"){
        return{
            ...state,
            data: action.payload,
            isLoading: false,
            message: '',
            isError: false,
        }
    } else if(action.type === "UPDATE_MENU_FAILED"){
        return{
            ...state,
            data: null,
            message: action.payload,
            isLoading: false,
            isError: true
        }
    } else{
        return state
    }
}

export default updateMenuReducer