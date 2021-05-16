import React, { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import axios from 'axios';

function Search(props){
  const [inputText, setInputText] = useState("");
  const { user } = useAuth0();
  useEffect(() => {
    if(props.searchChanged){
      setInputText("")
      props.setSearchChanged(false);
      axios.get('https://whispering-beyond-92417.herokuapp.com/contacts/'+user.sub)
        .then(response => {
          props.setContacts(response.data.sort((a,b) => {
            if(props.sort === "sortByNameAsc"){
              return(a.name.toUpperCase() > b.name.toUpperCase() ? 1 : -1);
            } else if(props.sort === "sortByNameDesc"){
              return(a.name.toUpperCase() < b.name.toUpperCase() ? 1 : -1);
            } else if(props.sort === "sortByEmailAsc"){
              return(a.email.toUpperCase() > b.email.toUpperCase() ? 1 : -1);
            } else if(props.sort === "sortByEmailDesc"){
              return(a.email.toUpperCase() < b.email.toUpperCase() ? 1 : -1);
            } else if(props.sort === "sortByDateAsc"){
              return(a.createdAt.toUpperCase() > b.createdAt.toUpperCase() ? 1 : -1);
            } else if(props.sort === "sortByDateDesc"){
              return(a.createdAt.toUpperCase() < b.createdAt.toUpperCase() ? 1 : -1);
            } else {
              return(a.name.toUpperCase() > b.name.toUpperCase() ? 1 : -1);
            }
          })
          );
        })
        .catch(error => {
          console.log("Error: "+error);
        });
    }
  });

  function handleChange(event){
    const value = event.target.value;
    setInputText(value);
    props.setContacts(prevValue => {
      return (
        [
          ...prevValue.sort((a,b) => {
            if(props.sort === "sortByNameAsc"){
              return(a.name.toUpperCase() > b.name.toUpperCase() ? 1 : -1);
            } else if(props.sort === "sortByNameDesc"){
              return(a.name.toUpperCase() < b.name.toUpperCase() ? 1 : -1);
            } else if(props.sort === "sortByEmailAsc"){
              return(a.email.toUpperCase() > b.email.toUpperCase() ? 1 : -1);
            } else if(props.sort === "sortByEmailDesc"){
              return(a.email.toUpperCase() < b.email.toUpperCase() ? 1 : -1);
            } else if(props.sort === "sortByDateAsc"){
              return(a.createdAt.toUpperCase() > b.createdAt.toUpperCase() ? 1 : -1);
            } else if(props.sort === "sortByDateDesc"){
              return(a.createdAt.toUpperCase() < b.createdAt.toUpperCase() ? 1 : -1);
            } else {
              return(a.name.toUpperCase() > b.name.toUpperCase() ? 1 : -1);
            }
          })
          .filter(contact => {
            if(props.search === "searchByName"){
              return(contact.name.toUpperCase().indexOf(value.toUpperCase()) >= 0);
            } else if(props.search === "searchByTel"){
              return(contact.tel.toUpperCase().indexOf(value.toUpperCase()) >= 0);
            } else if(props.search === "searchByEmail"){
              return(contact.email.toUpperCase().indexOf(value.toUpperCase()) >= 0);
            } else {
              return(contact.name.toUpperCase().indexOf(value.toUpperCase()) >= 0);
            }
          })
        ]
      );
    });
  };

  function onKeyDown(e){
    if(e.key === "Backspace"){
      axios.get('https://whispering-beyond-92417.herokuapp.com/contacts/'+user.sub)
        .then(response => {
          props.setContacts(response.data.sort((a,b) => {
            if(props.sort === "sortByNameAsc"){
              return(a.name.toUpperCase() > b.name.toUpperCase() ? 1 : -1);
            } else if(props.sort === "sortByNameDesc"){
              return(a.name.toUpperCase() < b.name.toUpperCase() ? 1 : -1);
            } else if(props.sort === "sortByEmailAsc"){
              return(a.email.toUpperCase() > b.email.toUpperCase() ? 1 : -1);
            } else if(props.sort === "sortByEmailDesc"){
              return(a.email.toUpperCase() < b.email.toUpperCase() ? 1 : -1);
            } else if(props.sort === "sortByDateAsc"){
              return(a.createdAt.toUpperCase() > b.createdAt.toUpperCase() ? 1 : -1);
            } else if(props.sort === "sortByDateDesc"){
              return(a.createdAt.toUpperCase() < b.createdAt.toUpperCase() ? 1 : -1);
            } else {
              return(a.name.toUpperCase() > b.name.toUpperCase() ? 1 : -1);
            }
          })
          .filter(contact => {
            if(props.search === "searchByName"){
              return(contact.name.toUpperCase().indexOf(inputText.toUpperCase().slice(0,inputText.length-1)) >= 0);
            } else if(props.search === "searchByTel"){
              return(contact.tel.toUpperCase().indexOf(inputText.toUpperCase().slice(0,inputText.length-1)) >= 0);
            } else if(props.search === "searchByEmail"){
              return(contact.email.toUpperCase().indexOf(inputText.toUpperCase().slice(0,inputText.length-1)) >= 0);
            } else{
              return(contact.name.toUpperCase().indexOf(inputText.toUpperCase().slice(0,inputText.length-1)) >= 0);
            }
          }))})
          .catch(error => {
            console.log("Error: "+error);
          });
        }
      }


  return(
    <div className="form-group">
    <div className="input-group">
      <input type="text" className="form-control" placeholder="Search for a contact" onKeyDown={onKeyDown} value={inputText} onChange={handleChange}/>
      <div className="input-group-append">
        <select className="form-control btn btn-outline-secondary dropdown-toggle" defaultValue={"DEFAULT"} onChange={props.handleSearchChange}>
          <option value="DEFAULT">Search By</option>
          <option value="searchByName">Name</option>
          <option value="searchByTel">Telephone</option>
          <option value="searchByEmail">Email</option>
        </select>
      </div>
    </div>
    </div>
  );
};

export default Search;
