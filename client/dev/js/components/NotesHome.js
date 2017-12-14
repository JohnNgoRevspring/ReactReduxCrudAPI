import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getNotes} from '../actions/index'; 
import {Link} from 'react-router'; 

class NotesHome extends Component{
  componentWillMount(){
    this.props.getNotes();  
  } 

  renderNotes(){
    return this.props.notes.map((note) => {
      return (
        <li key={note.id}> 
          <Link to={"notes/" + note.id }>
            {note.title}
          </Link> 
        </li> 
      )
    });
  }
  render(){
    return(
      <div className="container">

      <div>
      <Link to="notes/new" className="btn btn-warning">
        Create Note
      </Link> 
      </div>
      <ul className="list-group">
        {this.renderNotes()}
      </ul>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {notes: state.notes.all } 
}

export default connect(mapStateToProps, {getNotes: getNotes })(NotesHome); 
