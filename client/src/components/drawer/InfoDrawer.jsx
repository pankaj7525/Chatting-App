import { Drawer, Box, Typography, styled } from '@mui/material'; 
import { ArrowBack } from '@mui/icons-material';

// component
import Profile from './Profile';

const InfoDrawer = ({ open, setOpen }) => {

    const Header = styled(Box)`
        background:linear-gradient(45deg, #352F44  30%, #B9B4C7 30%, #FAF0E6 75%, #5C5470 30%);
        height: 120px;
        color: #ffffff;
        display: flex;
        & > svg, & > p{
            margin-top: auto;
            padding: 15px;
            font-weight: 600;
        }
    `;

    const Component = styled(Box)`
        background: #222222;
        height: 85%;
    `;

    const Text = styled(Typography)`
        font-size: 20px;
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