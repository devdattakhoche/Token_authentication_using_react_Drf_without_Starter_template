import {LOGIN , GET} from '../actions/types';
import Cookies from 'js-cookie';


export default (state = {}, action) => {
  switch(action.type){
    case LOGIN :
      Cookies.set('token',action.payload)
      return{
        ...state,
        // isAuthenticated : true
      }
      case GET :
      console.log(action.payload)
      return{
        ...state,
         res : action.payload
      }
    default : 
    return{
      ...state
    }
  }
};
