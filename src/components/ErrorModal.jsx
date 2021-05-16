import React from 'react';

function ErrorModal(props){
  return(
    <React.Fragment>
      <div className="backdrop" onClick={()=>props.setWarning(false)} />
      <div className="error-modal">
        <header className="header">
          <h2>Delete Contact</h2>
        </header>
        <div className="content">
          <p>This action cannot be undone. Are you sure you want to delete this contact?</p>
        </div>
        <footer className="actions">
          <button className="btn btn-secondary" onClick={()=>{
            props.deleteContact(props.id);
            props.setWarning(false);
          }}>
            Okay
          </button>
          <button className="btn btn-outline-secondary" onClick={()=>props.setWarning(false)}>Cancel</button>
        </footer>
        </div>
      </React.Fragment>
  );
}

export default ErrorModal;
