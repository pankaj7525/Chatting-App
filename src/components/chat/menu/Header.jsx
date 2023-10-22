import { useContext, useState } from "react";
import { AccountContext } from "../../../context/AccountProvider";


import { DonutLargeOutlined } from '@mui/icons-material';
import { Box, Typography, styled } from "@mui/material";
import HeaderMenu from "./HeaderMenu";
import InfoDrawer from "../../drawer/InfoDrawer";

const Component = styled(Box)`
    height: 85px ;
    background: #ededed ;
    padding: 8px 20px ;
    display: flex;
    align-items: center;
`;

// const Component05 = styled(Box)`
//     height: 40px;
//     padding: 19px 10px ;
//     display: flex;
//     align-items: center;
// `;

const Wrapper = styled(Box)`
    margin-left: auto;
    & > * {
        margin-left: 2px;
        padding: 8px;
        color; #000;    
    };
    & :first-child {
        font-size: 22px;
        margin-right: 8px;
        margin-top: 3px;
    }
`;
const Image = styled('img')({
    height: 40,
    width: 40,
    borderRadius: '50%', 
  })

const Header = () => {

    const [openDrawer, setOpenDrawer] = useState(false);

    const { account } = useContext(AccountContext); 

    const toggleDrawer = () => {
        setOpenDrawer(true);
      }
    return(
        <>
            <Component>
            
                  <Image src={account.picture} alt="dp" onClick={() => toggleDrawer()} />
                   <Typography style={{ fontWeight: '700', fontSize: '25px', fontStyle: 'inherit' }}>Chats</Typography>
                <Wrapper>
                    <DonutLargeOutlined />
                    <HeaderMenu/> 
                </Wrapper>
            </Component>
            <InfoDrawer open={openDrawer} setOpen={setOpenDrawer} />
        </>
    )
}

export default Header; 