import React from "react"
import EditForm from "./EditForm.jsx";

function EditContact(props){

  return(
    <EditForm
      id = {props.match.params.id}
    />
  );
}

export default EditContact;
