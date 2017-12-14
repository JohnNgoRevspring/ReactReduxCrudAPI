import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './components/App';
import NotesHome from './components/NotesHome';
import NewNote from './components/NewNote';
import SingleNoteShow from './components/SingleNoteShow';

export default(
  <Route path="/" component={App}>
    <IndexRoute component={NotesHome} /> 
    <Route path="notes/new" component={NewNote} />
    <Route path="notes/:id" component={SingleNoteShow} />
  </Route>
); 
