import { useContext } from 'react';
import { Dialog, Box, Typography, List, ListItem, styled } from '@mui/material';
import { qrCodeImage } from '../../constants/data';
import { AccountContext } from '../../context/AccountProvider';
import { addUser } from '../../service/api';
import { GoogleLogin } from '@react-oauth/google';
import jwt_decode from 'jwt-decode';

const Component = styled(Box)`
  display: flex;
`;

const Container = styled(Box)`
  padding: 56px 0 56px 56px;
`;

const QRCode = styled('img')({
    height: 200,
    width: 200,
    margin: '135px 0 0 20px'
});

const Title = styled(Typography)`
  font-size: 30px;
  color: #D80032;
  font-weight: 500;
  font-family: inherit;
  margin-bottom: 25px; 
`

const StyledList = styled(List)`
    padding: 0;
    margin-top: 60px;
    font-size: 18px;
    line-height: 28px;
    color: #D80032;
`

const dialogStyle = {
     height: '96%',
     marginTop: '4%',
     width: '60%',
     maxWidth: '100%',
     maxHeight: '65%',
     boxShadow: '20px 20px 20px #272829;',
     overFlow: 'hidden', 
     backgroundColor: '#000000',
     borderRadius: '10px' 
}

const LoginDialog = () => {

    const { setAccount } = useContext(AccountContext);

    const onLoginSuccess = async(res) => {
        const decoded = jwt_decode(res.credential);
        console.log(decoded);
        setAccount(decoded);
        await addUser(decoded);
     }

    const onLoginError = (res) => {
        console.log('Login Failed', res);
    }

    return (
        <Dialog
           open={true}
           PaperProps={{ sx: dialogStyle }}
           hideBackdrop={true}
        >
        {/* Box is replacement of Div */}

           <Component>  
              <Container>
                 <Title>𝚃𝚘 𝚄𝚜𝚎 𝙲𝚑𝚊𝚝𝙴𝚊𝚜𝚎 𝙾𝚗 𝚈𝚘𝚞𝚛 𝙲𝚘𝚖𝚙𝚞𝚝𝚎𝚛:</Title>  
                 <StyledList>
                    <ListItem>1.  𝙲𝚕𝚒𝚌𝚔 𝚘𝚗 𝚝𝚑𝚎 𝚜𝚒𝚐𝚗 𝚒𝚗 𝚠𝚒𝚝𝚑 𝙶𝚘𝚘𝚐𝚕𝚎.</ListItem>
                    <ListItem>2. 𝙴𝚗𝚝𝚎𝚛 𝚢𝚘𝚞𝚛 𝚖𝚊𝚒𝚕 𝚒𝚍. </ListItem>
                    <ListItem>3. 𝙸𝚏 𝚢𝚘𝚞 𝚊𝚕𝚛𝚎𝚊𝚍𝚢 𝚍𝚘𝚗𝚎 𝚝𝚑𝚎 2𝚗𝚍 𝚜𝚝𝚎𝚙 𝚝𝚑𝚎𝚗 𝚌𝚑𝚘𝚘𝚜𝚎 𝚢𝚘𝚞𝚛 𝚖𝚊𝚒𝚕.</ListItem>
                 </StyledList> 
              </Container>
              <Box style={{ position: 'relative'}}>
                <QRCode src={qrCodeImage} alt="qr code" />
                <Box style={{ position: 'absolute', top: '62%', left: -17, transform: 'translateX(25%)' }}>
                   <GoogleLogin
                     onSuccess={onLoginSuccess}
                     onError={onLoginError}
                   />
                </Box>
              </Box>
           </Component>
        </Dialog>
    )
}

export default LoginDialog;