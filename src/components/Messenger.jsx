import { useContext } from "react";
import { AppBar, Box, Toolbar, styled } from "@mui/material";
import { AccountContext } from "../context/AccountProvider";


// components
import LoginDialog from "./account/LoginDialog";
import ChatDialog from "./chat/ChatDialog";

const Component = styled(Box)`
 height: 100vh;
 background-color: #FFC436;
 box-shadow: inset 0 0 30px 15px rgba(44, 27, 43, 0.96);
`
const Header = styled(AppBar)`
  height: 125px;
  background-color: #337CCF;
  box-shadow: inset 0 0 30px 15px rgba(44, 27, 43, 0.96);
`
const LoginHeader = styled(AppBar)`
  height: 368px;
  background-color: #337CCF;
  box-shadow: inset 0 0 30px 15px rgba(44, 27, 43, 0.96);
`

const Messenger = () => {

  const { account } = useContext(AccountContext); 

    return (
        <Component>
          {
            account ? 
            <>
                <Header>
                      <Toolbar>

                      </Toolbar>
                  </Header>
                  <ChatDialog />
            </>
            :
            <>
              
              <LoginHeader>
                  <Toolbar>

                  </Toolbar>
              </LoginHeader>
              <LoginDialog/>
            </>
          }
        </Component>
    )
}

export default Messenger;