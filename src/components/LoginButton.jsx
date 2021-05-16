import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

function LoginButton(){
  const { loginWithRedirect, isAuthenticated } = useAuth0();
  return(
    !isAuthenticated && (
      <div className="sign-up">
        <header className="header">
          <h2>Welcome!</h2>
        </header>
        <div className="content">
          <p>Please sign up for a free account to access this contacts app!</p>
        </div>
        <footer className="login-actions">
        <button className="btn btn-lg btn-secondary" onClick={() => loginWithRedirect()}>
          Log In / Sign Up
        </button>
        </footer>
      </div>)
  );
}

export default LoginButton;
