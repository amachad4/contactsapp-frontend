import React, { useState } from "react";
import { Link } from 'react-router-dom';
import ErrorModal from "./ErrorModal.jsx";

function Card(props) {
  const [warning, setWarning] = useState(false);

  return (
    <React.Fragment>
    { warning && <ErrorModal setWarning={setWarning} id={props.id} deleteContact={props.deleteContact} />}
    <div className="col-lg-6 col-md-12 col-sm-12">
        <p className="index">{props.num}</p>
        <h4>{props.name}</h4>
        <hr />
        <p>Phone: {props.tel}</p>
        <p>Email: <a href={`mailto:${props.email}`}>{props.email}</a></p>
        <button className="btn btn-sm btn-secondary btn-block card-btn" onClick={() => setWarning(true)}>
          Delete
        </button>
        <Link to={`/edit/${props.id}`}><button className="btn btn-sm btn-outline-secondary btn-block">Edit Contact</button></Link>
    </div>
    </React.Fragment>
  );
}

export default Card;
