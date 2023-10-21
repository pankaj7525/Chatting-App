import React from 'react'
import { GoogleOAuthProvider } from '@react-oauth/google'
import Messenger from './components/Messenger'
import AccountProvider from './context/AccountProvider';



function App() {

  const clientId = '244379508346-6g7mbjq21imslvl77fcqhfnlhcq12mlh.apps.googleusercontent.com';

  return (
    <GoogleOAuthProvider clientId={clientId}>
      <AccountProvider>
        <Messenger />
     </AccountProvider>
    </GoogleOAuthProvider>
  )
}

export default App;

