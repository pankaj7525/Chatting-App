import { useContext, useEffect, useState } from "react";
import { Box, Typography, styled } from "@mui/material";
import { AccountContext } from "../../../context/AccountProvider";
import { setConversation, getConversation } from "../../../service/api";
import { formatDate } from "../../../utils/common-utils";

const Component = styled(Box)`
    display: flex;
    height: 45px;
    padding: 14px 0;
    cursor: pointer;

`;

const Image = styled('img')({
    width: 50,
    height: 50,
    borderRadius: '50%',
    padding: '0px 14px',
    objectFit: 'cover'
})



const  Conversation = ({user}) => {

    const { setPerson, account, newMessageFlag } = useContext(AccountContext);

    const [ message, setMessage ] = useState({});

    useEffect(()=> {
        const getConversationDetails = async () => {
            const data = await getConversation({senderId: account.sub, receiverId: user.sub});
            setMessage({ text: data?.message, timestamp: data?.updatedAt })
        }
        getConversationDetails();
    }, [account.sub, newMessageFlag, user.sub])

    const getUser = async () => {
        setPerson(user);
        await setConversation({ senderId: account.sub, receiverId: user.sub })
    }
    return(
        <Component onClick={() => getUser()}>
            <Box>
                <Image src={user.picture} alt="dp"/>
            </Box>
            <Box>
                <Box style={{color: 'white', padding: '10px 14px'}}>
                    <Typography>{user.name}</Typography>
                    {
                        message?.text &&
                            <Typography>{formatDate(message?.timestamp)}</Typography>
                    }
                </Box>

                <Box>
                    <Typography>{message?.text?.includes('localhost') ? 'media' : message.text}</Typography>
                </Box>
            </Box>
        </Component>
    )
}

export default Conversation;
