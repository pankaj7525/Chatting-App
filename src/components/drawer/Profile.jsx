import { useContext } from 'react';
import { Box, Typography, styled } from '@mui/material';
import { AccountContext } from '../../context/AccountProvider';

const ImageContainer = styled(Box)`
        display: flex;
        justify-content: center;
    `;

    const Image = styled('img')({
        width: 150,
        height: 150,
        borderRadius: '50%',
        padding: '25px 0'
    });

    const BoxWrapper = styled(Box)`
        background: #ffffff;
        padding: '12px 30px 12px 30px';
    `;


const Profile = () => {

    const { account } = useContext(AccountContext);

    return (
        <>
            <ImageContainer>
                <Image src={account.picture} alt="dp" />
            </ImageContainer>
            <BoxWrapper>
                <Typography>Your Name</Typography>
                <Typography>{account.name} 😃</Typography>
            </BoxWrapper>
            <Box></Box>
            <Box></Box>
        </>
    )
}

export default Profile;