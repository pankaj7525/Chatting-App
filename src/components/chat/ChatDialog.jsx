import { Dialog, Box, styled } from "@mui/material"; 

//components
import Menu from './menu/Menu';
import EmptyChat from "./chat/EmptyChat";


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
    border-left: 1px solid rgba(0, 0, 0, 0.14);
`;

const dialogStyle ={
    height: '620px',
    width: '100%',   
    marginBottom: '0px',
    marginRight: '8px', 
    marginLeft: '50px', 
    maxWidth: '100%',
    maxHeight: '100%',
    boxshadow: 'none',
    overflow: 'hidden',
}



const ChatDialog = () => {

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
                    <EmptyChat/> 
                </Rightcomponent>
            </Component>

        </Dialog>  
    )
}

export default ChatDialog;