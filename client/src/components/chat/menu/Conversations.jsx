import { useEffect, useState, useContext, Fragment } from "react";

import { Box, styled, Divider } from "@mui/material";

import { getUsers } from "../../../service/api";
import { AccountContext } from "../../../context/AccountProvider";

import Conversation from "./Conversation";


const Component = styled(Box)`
    max-height: 81vh;
    min-height: 55vh;
    overflow: overlay;
`;

const StyledDivider =   styled(Divider)`
    margin: 0 10px 0 10px;
    background: #A9A9A9;
    opacity: .2;
`;

const Conversations = ({ text }) => {
  const [users, setUsers] = useState([]);

  const { account, socket, setActiveUsers } = useContext(AccountContext);

  useEffect(() => {
    const fetchData = async () => {
      let response = await getUsers();
      const filteredData = response.filter(user => user.name.toLowerCase().includes(text.toLowerCase()));
      // console.log(response);
      setUsers(filteredData);
    }

    fetchData();
  }, [text]);

  useEffect(() => {
    socket.current.emit('addUsers', account);
    socket.current.on("getUsers", users => {
      setActiveUsers(users);

    })
  }, [account])

  return (
    <Component>
      {users.map((user, index) => {
        return (
          <Fragment key={index}>
            {user.sub !== account.sub && <Conversation user={user} /> }
          <StyledDivider/>
          </Fragment>
          
        );
      })}
    </Component>
  );
};

export default Conversations;
