import { Box, styled } from '@mui/material';

// component

import Footer from './Footer';

const Wrapper = styled(Box)`
    background-image: url(${'https://img.freepik.com/premium-vector/social-networks-dating-apps-vector-seamless-pattern_341076-469.jpg'});
    background-size: 50%;
    ${'' /* opacity: 0.5 */}
`;


const Component = styled(Box)`
    height: 71vh;
    overflow-y: scroll; 
`

const Messages = () => {

    return(

        <Wrapper>
            <Component>

            </Component>
            <Footer />
        </Wrapper>
    )
}

export default Messages;