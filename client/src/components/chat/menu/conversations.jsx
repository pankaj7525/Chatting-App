import { useEffect, useState } from 'react';

import { getUsers } from '../../../service/api';
import { Box } from '@mui/material';

import Conversation from './conversation';

const Conversations = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchData = async ()=>{
            let response = await getUsers();
            // console.log(response);
            setUsers(response);
        }
        fetchData();

    }, []);

    return(
        <Box>
            {
                users.map((user)=>{
                    console.log("user:",user);
                    return (
                        <>
                    <Conversation/>{user.name}</>
                    )
                })
            }
        </Box>
    )
}

export default Conversations;