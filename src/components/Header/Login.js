import React, { useState } from "react";
import { GoogleLogin, GoogleLogout } from "react-google-login";
import "./Login.css";


export default function Login() {
  const clientId = "775506645214-2vlp3vasl8bco05670156h9rfteigni4.apps.googleusercontent.com";
  const [showLoginButton, setShowLogintButton] = useState(true);
  const [showLogoutButton, setShowLogoutButton] = useState(false);

  const onLoginSuccess = (res) => {
    console.log("Login Success", res.profileObj);
    setShowLogintButton(false);
    setShowLogoutButton(true);
  }

  const onLoginFailure = (res) => {
    console.log("Login Failed", res);
    alert("Login Failed");
  }

  const onSignoutSuccess = () => {
    alert("You have signed out succesfully");
    console.clear();
    setShowLogintButton(true);
    setShowLogoutButton(false);
  } 


  return (
    <div>
      {showLoginButton ? 
        <GoogleLogin
          clientId={clientId}
          buttonText="Log In"
          onSuccess={onLoginSuccess}
          onFailure={onLoginFailure}
          cookiePolicy={"single_host_origin"}
          isSignedIn={true}
        /> : null 
      }
      {showLogoutButton ?
        <GoogleLogout
          clientId={clientId}
          buttonText="Log Out"
          onLogoutSuccess={onSignoutSuccess}
        /> : null 
      }
    </div>
  );
}

