import { useEffect, useState } from 'react';

import { getUsers } from '../../../service/api';
import { Box } from '@mui/material';

import Conversation from './conversation';

const Conversations = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchData = async ()=>{
            let response = await getUsers();
            setUsers(response);
        }
        fetchData();

    }, []);

    return(
        <Box>
            {
                users&&users.map(user =>(
                    <Conversation />
                ))
            }
        </Box>
    )
}

export default Conversations;