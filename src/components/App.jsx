import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import Navbar from "./Navbar.jsx"
import ContactsList from "./ContactsList.jsx";
import CreateContact from "./CreateContact.jsx";
import EditContact from "./EditContact.jsx";
import LoginButton from "./LoginButton.jsx";
import { useAuth0 } from "@auth0/auth0-react";

function App(){
  const {isAuthenticated, isLoading } = useAuth0();

  if(isLoading){
    return(
      <div>Loading...</div>
    );
  }else {
    return(
      <Router>
       <LoginButton />
        {isAuthenticated && (<Navbar />)}
        {isAuthenticated && (<Route path="/" exact component={ContactsList} />)}
        {isAuthenticated && (<Route path="/create" exact component={CreateContact} />)}
        {isAuthenticated && (<Route path="/edit/:id" exact component={EditContact} />)}
      </Router>
    );
  }
}

export default App;
