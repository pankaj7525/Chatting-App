// import { emptyChatImage } from '../../../constants/data';
import { Box, Typography, styled, Divider } from '@mui/material';
import background from './background.png';



const Component = styled(Box)`
     background: #222222;
     padding: 30px 0;
     text-align: center;
     height: 100vh;
`;

const Container = styled(Box)`
     padding:  0 200px ;
`;

const Image = styled('img')({
    height: 250,
    width: 450,
    marginTop: 100,
});


const Title = styled(Typography)`
    font-size: 32px;
    margin: 0px 0 1px 0;
    font-family: inherit;
    font-weight: 400;
    color: #41525d;
`;

const SubTitle = styled(Typography)`
    font-size: 22px;
    margin: 0px 0 2px 0;
    color: #A9A9A9;
    font-weight: 600;
    font-family: inherit;
    
`;
const SubTitle02 = styled(Typography)`
    font-size: 14px;
    margin: 0px 0 1px 0;
    color: #A9A9A9;
    font-weight: 400;
    font-family: inherit;
    
`;

const StyledDivider = styled(Divider)`
    margin: 20px 0;
`;

const EmptyChat = () => {
    return (
        <Component>
            <Container>
                <Image src={background} alt=""/>
                <Title>🅲🅷🅰🆃🅴🅰🆂🅴</Title>
                <SubTitle>" 𝔏𝔢𝔱'𝔰 𝔰𝔱𝔞𝔯𝔱 𝔠𝔥𝔞𝔱𝔱𝔦𝔫𝔤! "</SubTitle>
                <SubTitle02>𝙽𝚘 𝚖𝚎𝚜𝚜𝚊𝚐𝚎𝚜 𝚒𝚗 𝚢𝚘𝚞𝚛 𝚒𝚗𝚋𝚘𝚡 𝚢𝚎𝚝!!!</SubTitle02>
                <SubTitle02>𝙿𝚒𝚌𝚔 𝚊 𝚙𝚎𝚛𝚜𝚘𝚗 𝚏𝚛𝚘𝚖 𝚕𝚎𝚏𝚝 𝚖𝚎𝚗𝚞 𝚊𝚗𝚍 𝚜𝚝𝚊𝚛𝚝 𝚢𝚘𝚞𝚛 𝚌𝚘𝚗𝚟𝚎𝚛𝚜𝚊𝚝𝚒𝚘𝚗. </SubTitle02>
                <StyledDivider sx={{ borderBottomWidth: 3, borderBlockColor: '#A9A9A9' }}/>
            </Container>
        </Component>
    )
}

export default EmptyChat;