import { Drawer, Box, Typography, styled } from '@mui/material'; 
import { ArrowBack } from '@mui/icons-material';

// component
import Profile from './Profile';

const InfoDrawer = ({ open, setOpen }) => {

    const Header = styled(Box)`
        background: #337CCF;
        height: 107px;
        color: #ffffff;
        display: flex;
        & > svg, & > p{
            margin-top: auto;
            padding: 15px;
            font-weight: 600;
        }
    `;

    const Component = styled(Box)`
        background: #ededed;
        height: 85%;
    `;

    const Text = styled(Typography)`
        font-size: 18px;
    `;



    const drawerStyle = {
        left: 40,
        top: 45,
        height: '89%',
        width: '30%',
        boxShadow: 'none',
        borderRadius: '10px',
    }

    const handleClose = () =>{
        setOpen(false);
    }

    return(

        <Drawer
           open={open}
           onClose={handleClose}
           PaperProps={{ sx: drawerStyle }} 
           style={{ zIndex: 1500 }}
        >
           <Header>
               <ArrowBack onClick={() => setOpen(false)}/>
               <Text>Profile</Text>
           </Header>
           <Component>
                <Profile />
           </Component>
        </Drawer>
    )
}
export default InfoDrawer;