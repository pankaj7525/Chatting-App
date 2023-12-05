import { useContext, useState } from "react";
import { AccountContext } from "../../../context/AccountProvider";


import { DonutLargeOutlined } from '@mui/icons-material';
import { Box, Typography, styled } from "@mui/material";
import HeaderMenu from "./HeaderMenu";
import InfoDrawer from "../../drawer/InfoDrawer";

const Component = styled(Box)`
    height: 55px ;
    // background: linear-gradient(45deg, #93B1A6 30%, #A5A7A8 90%) ;
    background: linear-gradient(180deg, #0B7510 0%, rgba(84, 125, 18, 0.54) 45.83%, #95A4BB 100%);
    padding: 8px 20px ;
    display: flex;
    align-items: center;
`;

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
    height: 28,
    width: 30,
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
                   <Typography style={{ fontWeight: '700', fontSize: '28px', fontStyle: 'inherit', }}>Chats</Typography>
                <Wrapper style={{cursor:'pointer'}}>
                    <Image src={account.picture} alt="dp" onClick={() => toggleDrawer()} />
                    <DonutLargeOutlined />
                    <HeaderMenu setOpenDrawer={setOpenDrawer} /> 
                </Wrapper>
            </Component>
            <InfoDrawer open={openDrawer} setOpen={setOpenDrawer} />
        </>
    )
}

export default Header; 