import { useContext } from 'react';

import { Box, Typography, styled, InputBase } from '@mui/material';
// import { Search, MoreVert, LocalPhone, Videocam } from '@mui/icons-material';
import { Search as SearchIcon } from "@mui/icons-material";

// import { defaultProfilePicture } from '../../../constants/data';
import { AccountContext } from '../../../context/AccountProvider';

const Component = styled(Box)`
    height: 55px;
    display: flex;
    align-items: center;
`;

const Wrapper = styled(Box)`
    background-color: grey;
    position: relative;
    margin: 0 15px;
    width: 80%;
    border: 3px solid #000000;
    border-radius: 10px;
`;

const Icon = styled(Box)`
    position: absolute;
    height: 100%;
    padding: 5px 10px;
    color: #919191;
`;

const InputField  = styled(InputBase)`
    width: 100%;
    padding: 16px;
    padding-left: 38px;
    height: 15px;
    font-size: 14px;
`;

const Header = styled(Box)`
    height: 55px;
    background:linear-gradient(45deg, #352F44  30%, #B9B4C7 30%, #FAF0E6 75%, #5C5470 30%);
    padding: 8px 16px;
    display: flex;
    align-items: center;
`;

const Image = styled('img')({
    height: 40,
    width: 40,
    objectFit: 'cover',
    borderRadius: '50%'
});

const Name = styled(Typography)`
    margin-left: 12px !important;
    color: #fff;
`
const Status = styled(Typography)`
    margin-left: 12px !important;
    font-size: 12px;
    color: #EEF5FF;
`;

const RightContainer = styled(Box)`
    margin-left: auto;
    & > svg {
        padding: 8px;
        font-size: 24px;
        color: #fff;
        cursor: pointer;
    }
`;


const ChatHeader = ({person, setText}) => {
    
    const { activeUsers } = useContext(AccountContext);


    return(

        <Header>
            <Image src={person.picture} alt='dp' />
            <Box>
                <Name>{person.name}</Name>
                <Status>{activeUsers?.find(user=> user.sub === person.sub) ? 'online': 'offline'}</Status>

            </Box>
            <RightContainer>
                {/* <Videocam /> */}
                {/* <LocalPhone /> */}
                <Component>
            <Wrapper> 
                <Icon>
                    <SearchIcon
                        fontSize="small"
                    />
                </Icon>
                <InputField
                    placeholder='Search or start new chat'
                />
            </Wrapper>
        </Component>
                {/* <MoreVert /> */}
            </RightContainer>
        </Header>
    )
}

export default ChatHeader;