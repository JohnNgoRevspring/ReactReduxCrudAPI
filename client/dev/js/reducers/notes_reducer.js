import {GET_NOTES, GET_NOTE} from '../actions/types';

const INITIAL_STATE = {all: [], note: null};

export default function(state = INITIAL_STATE, action){
  switch(action.type){
    case GET_NOTES:
      return { ...state, all: action.payload.data} ;
    case GET_NOTE:
      return { ...state, note: action.payload.data} ; 
    default:
      return state;
  }
}
