import { useContext } from "react";
import { AppBar, Box, Toolbar, Typography, styled } from "@mui/material";
import { AccountContext } from "../context/AccountProvider";
import { Chat as MessageIcon, LocalPhoneOutlined } from '@mui/icons-material';



// components
import LoginDialog from "./account/LoginDialog";
import ChatDialog from "./chat/ChatDialog";
// import InfoDrawer from "./drawer/InfoDrawer";

const Component = styled(Box)`
 height: 100vh;
 background-color: #FFC436;
 box-shadow: inset 0 0 30px 15px rgba(44, 27, 43, 0.96);
`;

const AppLogo = styled(Box)`
    height: 30px;
    padding: 1px 0px 12px 1px;
    
`;
const MsgIcon = styled(Box)`
    height: 40px;
    padding: 49px 28px;
    display: flex;
`;
const PhnIcon = styled(Box)`
    height: 40px;
    padding: 5px 28px ;
    display: flex;
`;

const Title = styled(Box)`
    padding: 5px 20px;
`;

const Image = styled('img')({
  height: 30,
  width: 30,
  // borderRadius: '50%',
});

const Header = styled(AppBar)`
  height: 355px;
  background-color: #337CCF;
  box-shadow: inset 0 0 30px 15px rgba(44, 27, 43, 0.96);
`
const LoginHeader = styled(AppBar)`
  height: 368px;
  background-color: #337CCF;
  box-shadow: inset 0 0 30px 15px rgba(44, 27, 43, 0.96);
`

const Messenger = () => {

  // const [openDrawer, setOpenDrawer] = useState(false);

  const { account } = useContext(AccountContext); 

  // const toggleDrawer = () => {
  //   setOpenDrawer(true);
  // }


    return (
        <Component>
          {
            account ? 
            <>
                <Header>
                      <Toolbar>
                           <AppLogo sx={{ m: -2 }}>
                               <Image src="https://cdn-icons-png.flaticon.com/128/4439/4439019.png" alt="logo" />
                           </AppLogo>
                           <Title sx={{ m: 0, mt: -2 }}>
                           <Typography>ChatEase</Typography>
                           </Title>
                      </Toolbar>
                      <MsgIcon sx={{ m: -2 }}>
                        <MessageIcon />
                      </MsgIcon>
                      <PhnIcon sx={{ m: -2 }}>
                      <LocalPhoneOutlined />
                      </PhnIcon>
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