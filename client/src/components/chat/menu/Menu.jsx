import { Box } from '@mui/material';
//components
import Header from './Header';
import Search from './Search';
import Conversations from './conversations';



const Menu = () => {
    return(
        <Box>
            <Header />
            <Search />
            <Conversations />
        </Box>
    )

}

export default Menu;