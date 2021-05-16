import React from 'react';

function WarningModal(props){
  return(
    <React.Fragment>
      <div className="backdrop" onClick={()=>{
        props.setErrors(false)
        props.setErrorsList([])
      }} />
      <div className="error-modal">
        <header className="header">
          <h2>Warning!</h2>
        </header>
        <div className="content">
          {props.errorsList.map(error => {
            return(<p key={Math.random()}>{error.msg}</p>)
          })}
        </div>
        <footer className="actions">
          <button className="btn btn-outline-secondary" onClick={()=>{
            props.setErrors(false)
            props.setErrorsList([])
          }}>
            Okay
          </button>
        </footer>
        </div>
      </React.Fragment>
  );
};

export default WarningModal;
