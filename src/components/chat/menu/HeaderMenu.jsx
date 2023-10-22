import { useState } from "react";

import { MoreVert } from "@mui/icons-material";
import { Menu, MenuItem, styled } from "@mui/material";

const MenuOption = styled(MenuItem)`
    font-size: 14px;
    padding: 15px 60px 5px 24px;
    color; #4A4A4A;
`

const HeaderMenu = () => {

    const [ open, setopen ] = useState(null);

    const handleClose = () => {
        setopen(null);
    }

    const handleClick = (e) => {
        setopen(e.currentTarget);
    }


    return (
        <>
            <MoreVert onClick={handleClick} />
            <Menu
                anchorEl={open}
                keepMounted
                open={open}
                onClose={handleClose}
                getContentAnchorE1={null}
                anchorOrigin={{
                    vertical: 'bottom', 
                    horizontal: 'center'
                }}
                transformOrigin={{
                    vertical:'top',
                    horizontal: 'right'
                }}
            >
                <MenuOption onClick={handleClose}>Profile</MenuOption>
                <MenuOption onClick={handleClose}>Logout</MenuOption>
            </Menu>
        </>
    )
}
export default HeaderMenu;