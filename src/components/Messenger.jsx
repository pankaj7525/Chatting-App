import { AppBar, Box, Toolbar, styled } from "@mui/material";


// components
import LoginDialog from "./account/LoginDialog";

const Component = styled(Box)`
 height: 100vh;
 background-color: #FFC436;
 box-shadow: inset 0 0 30px 15px rgba(44, 27, 43, 0.96);
`

const Header = styled(AppBar)`
  height: 368px;
  background-color: #337CCF;
  box-shadow: inset 0 0 30px 15px rgba(44, 27, 43, 0.96);
`

const Messenger = () => {


    return (
        <Component>
           <Header>
              <Toolbar>

              </Toolbar>
           </Header>
           <LoginDialog/>
        </Component>
    )
}

export default Messenger;