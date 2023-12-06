import { useContext } from "react";
import { Dialog, Box, styled } from "@mui/material"; 
import { AccountContext } from "../../context/AccountProvider";

//components
import Menu from './menu/Menu';
import EmptyChat from "./chat/EmptyChat";
import ChatBox from "./chat/ChatBox";


const Component = styled(Box)`
    display: flex;
    border-radius: 10px;
`;


const LeftComponent = styled(Box)`
    min-width: 450px;
    
`;


const Rightcomponent = styled(Box)`
    width: 73%;
    min-width: 300px;
    height: 100%;
    border-left: 1px solid grey;
`;

const dialogStyle ={
    height: '630px',
    width: '100%',   
    marginBottom: '20px',
    marginRight: '40px', 
    marginLeft: '40px', 
    maxWidth: '100%',
    maxHeight: '100%',
    boxshadow: 'none',
    overflow: 'hidden',
    borderRadius: '10px',
    backgroundColor: '#202020',
}



const ChatDialog = () => {

    const { person } = useContext(AccountContext);

    return(
        <Dialog 
            open={true}
            PaperProps={{ sx: dialogStyle }}
            hideBackdrop={true}
            maxWidth={'md'}
        >
            <Component>
                <LeftComponent>
                    <Menu/>
                </LeftComponent>
                <Rightcomponent>
                    { Object.keys(person).length ? <ChatBox /> : <EmptyChat />}
                </Rightcomponent>
            </Component>
        </Dialog>  
    )
}

export default ChatDialog;