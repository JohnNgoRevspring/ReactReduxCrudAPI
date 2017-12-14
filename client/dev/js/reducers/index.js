import {combineReducers} from 'redux';
import NotesReducer from './notes_reducer'; 
import {reducer as formReducer} from 'redux-form';

const allReducers = combineReducers({
  notes: NotesReducer, 
  form: formReducer
});

export default allReducers
