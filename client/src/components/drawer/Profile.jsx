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
        background:linear-gradient(45deg, #352F44  30%, #B9B4C7 30%, #FAF0E6 75%, #5C5470 30%);
        padding: '14px 30px 14px 30px';
        box-shadow: 0 1px 3px rgba(0,0,0,0.08);
        & : first-child {
            font-size: 13px;
            color: #1640D6;
            font-weiight: 200;
            margin-left: 13px;
        }
        & : last-child {
            margin-left: 13px;
            color: #ffffff;
            padding: 10px 0;
        }
    `;

    const DescriptionContainer = styled(Box)`
            padding: 15px 20px 28px 30px;
            & > p {
                font-size: 13px;
                color: #ffffff;
            }
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
                <Typography>{account.name} 😎</Typography>
            </BoxWrapper>
            <DescriptionContainer>
                <Typography>This is not your username or pin. This name will be visible to your contact</Typography>
            </DescriptionContainer>
            <BoxWrapper>
                <Typography>About</Typography>
                <Typography>Eat! - Sleep! - Code! - Repeat!</Typography>
            </BoxWrapper>
        </>
    )
}

export default Profile;