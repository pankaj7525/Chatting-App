import { Box, InputBase, styled } from "@mui/material";
import { Search as SearchIcon } from "@mui/icons-material";

const Component = styled(Box)`
    background:#000000;
    height: 55px;
    display: flex;
    align-items: center;
`;


const Wrapper = styled(Box)`
    background-color: grey;
    position: relative;
    margin: 0 15px;
    width: 100%;
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
    padding-left: 65px;
    height: 15px;
    font-size: 14px;


`;

const Search = ({ setText }) =>{
    
    return(
        <Component>
            <Wrapper> 
                <Icon>
                    <SearchIcon
                        fontSize="small"
                    />
                </Icon>
                <InputField
                    placeholder='Search or start new chat'
                    onChange={(e) => setText(e.target.value)}
                />
            </Wrapper>
        </Component>
    )
}

export default Search;