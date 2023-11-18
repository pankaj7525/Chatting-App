import { useEffect, useState, useContext, Fragment } from "react";

import { Box, styled, Divider } from "@mui/material";

import { getUsers } from "../../../service/api";
import { AccountContext } from "../../../context/AccountProvider";

import Conversation from "./Conversation";


const Component = styled(Box)`
    height: 81vh;
    overflow: overlay;

`

const StyledDivider =   styled(Divider)`
    margin: 0 0 0 70px;
    background: #e9edef;
    opacity: .6;
`

const Conversations = ({ text }) => {
  const [users, setUsers] = useState([]);

  const { account } = useContext(AccountContext);

  useEffect(() => {
    const fetchData = async () => {
      let response = await getUsers();
      const filteredData = response.filter(user => user.name.toLowerCase().includes(text.toLowerCase()));
      // console.log(response);
      setUsers(filteredData);
    }

    fetchData();
  }, [text]);

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
