import { useContext } from "react";
import { AppBar, Box, Toolbar, Typography, styled } from "@mui/material";
import { AccountContext } from "../context/AccountProvider";
// import { Chat as MessageIcon, LocalPhoneOutlined } from '@mui/icons-material';
import logoblack from './logoblack.png'



// components
import LoginDialog from "./account/LoginDialog";
import ChatDialog from './chat/ChatDialog';
// import InfoDrawer from "./drawer/InfoDrawer";

const Component = styled(Box)`
 height: 100vh;
 background: linear-gradient(45deg, #F8DE22 30%, #068FFF 90%);
 box-shadow: inset 0 0 30px 15px rgba(44, 27, 43, 0.96);
`;

const AppLogo = styled(Box)`
    height: 25px;
    padding: 1px 0px 12px 1px;
    
`;
// const MsgIcon = styled(Box)`
//     height: 40px;
//     padding: 43px 23px;
//     display: flex;
// `;
// const PhnIcon = styled(Box)`
//     height: 40px;
//     padding: 5px 23px ;
//     display: flex;
// `;

const Title = styled(Box)`
    padding: 5px 25px;
`;

const Image = styled('img')({
  height: 30,
  width: 30,
  // borderRadius: '50%',
});

const Header = styled(AppBar)`
  height: 800px;
  background:linear-gradient(45deg, #C060A1  30%, #FFAA4C 30%, #7978FF 75%, #C47AFF 30%);
  box-shadow: inset 0 0 30px 15px rgba(44, 27, 43, 0.96);
`
const LoginHeader = styled(AppBar)`
  height: 800px;
  background:linear-gradient(45deg, #092635  30%, #5C8374 30%, #D0A2F7 75%, #1B4242 30%);
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
                           <AppLogo sx={{ mx: -2.5, mt: -2 }}>
                               <Image src={logoblack} alt="logo" />
                           </AppLogo>
                           <Title sx={{ m: 0, mt: -3 }}>
                           <Typography>🅲🅷🅰🆃🅴🅰🆂🅴</Typography>
                           </Title>
                      </Toolbar>
                      {/* <MsgIcon sx={{ m: -2 }}>
                        <MessageIcon />
                      </MsgIcon>
                      <PhnIcon sx={{ m: -2 }}>
                      <LocalPhoneOutlined />
                      </PhnIcon> */}
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