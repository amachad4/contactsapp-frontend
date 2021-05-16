import React, { useState } from 'react';
import CancelButton from "./CancelButton.jsx";
import WarningModal from "./WarningModal.jsx";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";

function EditForm(props){
  const [input, setInput] = useState(
    {
      userid: '',
      name: '',
      tel: '',
      email: ''
    }
  );
  const [errors, setErrors] = useState(false);
  const [errorsList, setErrorsList] = useState([]);
  const { user } = useAuth0();

  React.useEffect(()=> {
    axios.get('https://whispering-beyond-92417.herokuapp.com/contacts/details/'+props.id)
      .then(response => {
        setInput(
          {
            userid: response.userid,
            name: response.data.name,
            tel: response.data.tel,
            email: response.data.email
          }
        );
      })
      .catch(error => {
        console.log("Error: "+error);
      })
  }, []);

  function handleChange(event){
    const value = event.target.value;
    const name = event.target.name;
    setInput(prevValue => {
      if(name === 'name'){
        return(
          {
            userid: user.sub,
            name: value,
            tel: prevValue.tel,
            email: prevValue.email
          }
        );
      } else if(name === 'tel'){
        return(
          {
            userid: user.sub,
            name: prevValue.name,
            tel: value,
            email: prevValue.email
          }
        );
      } else{
        return(
          {
            userid: user.sub,
            name: prevValue.name,
            tel: prevValue.tel,
            email: value
          }
        );
      }
    });
  };

  function onSubmit(e){
    e.preventDefault();
    axios.post('https://whispering-beyond-92417.herokuapp.com/contacts/update/'+props.id, input)
      .then(res => {
        if(res.data.hasOwnProperty('errors')){
          setErrors(true);
          setErrorsList(res.data.errors);
        } else {
          window.location.href = '/';
        }
      });
  };



  return(
    <div className="row">
    {errors && <WarningModal setErrorsList={setErrorsList} errorsList={errorsList} setErrors={setErrors} />}
    <h2>Edit this contact</h2>
    <div className="row">
    <div className="col-lg-12">
    <form onSubmit={onSubmit}>
      <div className="form-group">
        <label>Name:</label>
        <input type="text" name="name" value={input.name} className="form-control" onChange={handleChange}  placeholder="Enter a name" />
      </div>
      <div className="form-group">
        <label>Telephone Number:</label>
        <input type="text" name="tel" value={input.tel} className="form-control" onChange={handleChange} placeholder="Enter a telephone number" />
      </div>
      <div className="form-group">
        <label>Email Address:</label>
        <input type="email" name="email" value={input.email} className="form-control" onChange={handleChange} placeholder="Enter an email" />
      </div>
      <button type="submit" className="btn btn-secondary">Submit</button>
      <CancelButton>Cancel</CancelButton>
    </form>
    </div>
    </div>
    </div>
  );
};

export default EditForm;
