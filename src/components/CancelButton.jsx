import React from 'react';

function CancelButton(props){
  return(
    <button className="btn btn-outline-secondary" onClick={() => window.location.href = '/'}>
      {props.children}
    </button>
  );
}

export default CancelButton;
