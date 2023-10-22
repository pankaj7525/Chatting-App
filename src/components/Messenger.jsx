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
    height: 44px;
    display: flex;
    align-items: center;
`;
const MsgIcon = styled(Box)`
    height: 40px;
    padding: 19px 10px ;
    display: flex;
`;
const PhnIcon = styled(Box)`
    height: 40px;
    padding: 19px 10px ;
    display: flex;
`;
// const Component05 = styled(Box)`
//     height: 40px;
//     padding: 19px 10px ;
//     display: flex;
//     align-items: center;
// `;

const Image = styled('img')({
  height: 32,
  width: 32,
  borderRadius: '50%',
})

// const Image = styled('img')({
//   height: 32,
//   width: 32,
//   borderRadius: '50%', 
// })

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
                           <AppLogo>
                               <Image src="https://png.pngtree.com/element_our/png/20181229/vector-chat-icon-png_302635.jpg" alt="logo" />
                           </AppLogo>
                            <Typography>ChatEase</Typography> 
                            {/* TapMe */}
                      </Toolbar>
                      <MsgIcon>
                        <MessageIcon />
                      </MsgIcon>
                      <PhnIcon>
                      <LocalPhoneOutlined />
                      </PhnIcon>
                      {/* <Component05>
                        <Image src={account.picture} alt="dp" onClick={() => toggleDrawer()} />
                      </Component05> */}
                      {/* <InfoDrawer open={openDrawer} setOpen={setOpenDrawer} /> */}
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