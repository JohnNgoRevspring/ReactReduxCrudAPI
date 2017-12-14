import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux'; 
import {getNote, deleteNote} from '../actions/index'; 

class SingleNoteShow extends Component{
  static contextTypes = {
    router: PropTypes.object
  }

  componentWillMount(){
    this.props.getNote(this.props.params.id); 
  }

  deleteButtonClick(){
    this.props.deleteNote(this.props.params.id)
      .then(() => {
        this.context.router.push('/');
      }); 
  }

  render(){
    if(!this.props.note){
      return <div> Getting note, please wait. </div>; 
    }

    return(
      <div className="container">

      <h3>Title: {this.props.note.title} </h3>

      <button className="btn btn-warning" onClick={this.deleteButtonClick.bind(this)}>
        Delete Note
      </button> 

      </div>
    );
  }
}

function mapStateToProps(state){
  return { note: state.notes.note}; 
}


export default connect(mapStateToProps, {getNote, deleteNote})(SingleNoteShow); 
