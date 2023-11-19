import { useContext } from 'react';
import { Box, Typography, styled } from '@mui/material';
import { formatDate } from '../../../utils/common-utils';
import { AccountContext } from '../../../context/AccountProvider';

const Own = styled(Box)`
     background: #068FFF;
     max-width: 60%;
     margin-left: auto;
     padding: 5px;
     width: fit-content;
     display: flex;
     border-radius: 8px;
     word-break: break-word;
`;

const Wrapper = styled(Box)`
     background: #F8DE22;
     max-width: 60%;
     padding: 5px;
     width: fit-content;
     display: flex;
     border-radius: 8px;
     word-break: break-word;
`;

const Text = styled(Typography)`
     font-size: 14px;
     padding: 0 10px 0 5px;
`;

const Time = styled(Typography)`
     font-size: 10px;
     color: #61677A;
     margin-top: 6px;
     word-break: keep-all;
     margin-top: auto;
`;

export const Message = ({ message }) => {

    const { account } = useContext(AccountContext);
    
    return (
        <>
            {
                account.sub === message.senderId ?
                    <Own>
                        <Text>{message.text}</Text>
                        <Time>{formatDate(message.createdAt)}</Time>
                    </Own>
                :
                    <Wrapper>
                        <Text>{message.text}</Text>
                        <Time>{formatDate(message.createdAt)}</Time>
                    </Wrapper>
                }
        </>
    )
}

export default Message;