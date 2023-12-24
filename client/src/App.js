import React from "react";
import { GoogleOAuthProvider } from "@react-oauth/google";
import Messenger from "./components/Messenger";
import AccountProvider from "./context/AccountProvider";
import { Auth0Provider } from "@auth0/auth0-react";

function App() {
  const clientId =
    "244379508346-6g7mbjq21imslvl77fcqhfnlhcq12mlh.apps.googleusercontent.com";
// console.log(window.location.origin);
  return (
    <Auth0Provider
      domain={window.location.origin}
      clientId={clientId}
      redirectUri={window.location.origin}
    >
      <GoogleOAuthProvider clientId={clientId}>
        <AccountProvider>
          <Messenger />
        </AccountProvider>
      </GoogleOAuthProvider>
    </Auth0Provider>
  );
}

export default App;
