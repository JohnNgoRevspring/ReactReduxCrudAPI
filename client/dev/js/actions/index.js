import {GET_NOTES, GET_NOTE, CREATE_NOTE, DELETE_NOTE} from './types'; 
import  axios from 'axios';

const API_URL = "http://localhost:3020" ; 

export function getNotes(){
  const request = axios.get(`${API_URL}/notes`);
  return{
    type: GET_NOTES,
    payload: request
  };
}

export function createNote(props){
  const request = axios.post(`${API_URL}/notes`, props);
  return{
    type: CREATE_NOTE,
    payload: request
  };
}

export function deleteNote(id){
  const request = axios.delete(`${API_URL}/notes/${id}`);

  return{
    type: DELETE_NOTE,
    payload: request
  }; 
}

export function getNote(id){
  const request = axios.get(`${API_URL}/notes/${id}`);

  return{
    type: GET_NOTE,
    payload: request
  }; 
}


