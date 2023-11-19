import { useContext, useState, useEffect } from 'react';
import { Box, styled } from '@mui/material';
import { AccountContext } from '../../../context/AccountProvider';
import { getMessages, newMessage } from '../../../service/api';


// component

import Footer from './Footer';
import { Message } from './Message';

const Wrapper = styled(Box)`
    background-image: url(${'https://img.freepik.com/premium-vector/social-networks-dating-apps-vector-seamless-pattern_341076-469.jpg'});
    background-size: 50%;
    ${'' /* opacity: 0.5; */}
`;


const Component = styled(Box)`
    height: 71vh;
    overflow-y: scroll; 
`;

const Container = styled(Box)`
    padding: 1px 80px;
`;

const Messages = ({person, conversation}) => {

    const [value, setValue] = useState('');
    const [messages, setMessages] = useState([]);
    const [newMessageFlag, setNewMessageFlag] = useState(false);

    const {account} = useContext(AccountContext);

    useEffect(() => {
        const getMessageDetails = async () => {
            let data = await getMessages(conversation._id);
            setMessages(data);
        }
        conversation._id && getMessageDetails();
    }, [person._id, conversation._id, newMessageFlag])
    

    const sendText = async (e) => {
        const code = e.KeyCode || e.which;
        if (code === 13 ) {
            let message = {
                senderId: account.sub,
                receiverId: person.sub,
                conversationId: conversation._id,
                type: 'text',
                text:  value
            }

            await newMessage(message);

            setValue('');
            setNewMessageFlag(prev => !prev)
        }
    }

    return(

        <Wrapper>
            <Component>
                {
                    messages && messages.map(message => (
                        <Container>
                            <Message message={message}/>
                        </Container> 
                    ))
                }
            </Component>
            <Footer 
                sendText={sendText}
                setValue={setValue}
                value={value}
            />
        </Wrapper>
    )
}

export default Messages;