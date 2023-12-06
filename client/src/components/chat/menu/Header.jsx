import { useContext, useState } from "react";
import { AccountContext } from "../../../context/AccountProvider";

import { Box, Typography, styled } from "@mui/material";
import HeaderMenu from "./HeaderMenu";
import InfoDrawer from "../../drawer/InfoDrawer";

const Component = styled(Box)`
    height: 55px ;
    padding: 20px 20px ;
    display: flex;
    align-items: center;
`;

const Wrapper = styled(Box)`
    margin-left: auto;
    & > * {
        margin-left: 2px;
        padding: 8px;
        color;#000;    
    };
    & :first-child {
        font-size: 10px;
        margin-right: 30px;
        margin-top: 3px;
    }
`;
const Image = styled('img')({
    height: 28,
    width: 28,
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
             <Typography style={{ fontWeight: '700', fontSize: '38px', fontStyle: 'inherit', color: 'white' }}>𝔠𝔥𝔞𝔱𝔰</Typography>
                <Wrapper style={{cursor:'pointer', color: 'white'}}>
                    <Image src={account.picture} alt="dp" onClick={() => toggleDrawer()} />
                    <HeaderMenu setOpenDrawer={setOpenDrawer} /> 
                </Wrapper>
            </Component>
            <InfoDrawer open={openDrawer} setOpen={setOpenDrawer} />
        </>
    )
}

export default Header; 