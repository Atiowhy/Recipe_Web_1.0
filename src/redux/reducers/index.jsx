import { combineReducers } from 'redux';
import loginReducer from './login';
import registerReducer from './register';
import menu from './menu';
import delete_menu from './delete_menu';
import post_menu from './post_menu';
import updateMenu from './update_menu';
import getDetail from './getMenuDetail'
import getMenuUsersReducer from './getMenuUsers';

const rootReducers = combineReducers({
  loginReducer,
  registerReducer,
  menu,
  delete_menu,
  post_menu,
  updateMenu,
  getDetail,
  getMenuUsersReducer
});

export default rootReducers;
