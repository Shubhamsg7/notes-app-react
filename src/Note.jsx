import React from "react";
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';

const Note = (props) => {

    const deleteNote = () => {
        props.deleteItem(props.id);
    }

  return (
    <>
      <div className="note">
          <h2>{props.title}</h2>
          <p>{props.content}</p>
         <DeleteOutlineIcon className="deletebtn" onClick={deleteNote} />
      </div>
    </>
  );
}

export default Note;
