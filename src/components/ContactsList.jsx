import React, { useState } from 'react';
import axios from 'axios';
import Card from './Card.jsx';
import SortAndSearch from './SortAndSearch.jsx';
import { useAuth0 } from "@auth0/auth0-react";

function ContactsList(){
  const [contacts, setContacts] = useState([]);
  const [sort, setSort] = useState('');
  const [warning, setWarning] = useState(false);
  const { user } = useAuth0();

  React.useEffect(()=> {
    axios.get('https://whispering-beyond-92417.herokuapp.com/contacts/'+user.sub)
      .then(response => {
        setContacts(response.data.sort((a, b) => {
          const textA = a.name.toUpperCase();
          const textB = b.name.toUpperCase();
          return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
        }));
      })
      .catch(error => {
        console.log("Error: "+error);
      })
  }, []);

  function deleteContact(id){
      axios.delete('https://whispering-beyond-92417.herokuapp.com/contacts/'+id)
        .then(response => { console.log(response.data)});
      setContacts(prevValue => {
        return(prevValue.filter(contact => {
          return contact._id !== id;
        }))
      })
  };

  return(
    <React.Fragment>
    <p className="instruction">Please click on Create Contact in the Navbar to add a new contact!</p>
        <SortAndSearch
          sort = {sort}
          setSort = {setSort}
          contacts = {contacts}
          setContacts = {setContacts}
        />
      <div className="row contact-container">
      {contacts.map((contact, index) => {
        return(
        <div className="card">
        <Card
          key = {contact._id}
          id = {contact._id}
          num = {index+1}
          name = {contact.name}
          tel = {contact.tel}
          email = {contact.email}
          deleteContact = {deleteContact}
          setWarning = {setWarning}
          warning = {warning}
        />
        </div>
        );
      })}
      </div>
    </React.Fragment>
  );
};

export default ContactsList;
