import { useEffect } from 'react';
import { Box, InputBase, styled } from '@mui/material';
import { EmojiEmotionsOutlined, Attachment, Mic } from '@mui/icons-material';
import { uploadFile } from '../../../service/api';


const Container = styled(Box)`
    height: 61px;
    background: linear-gradient(45deg, #93B1A6 30%, #B4B4B3 90%);
    display: flex;
    width: 100%;
    align-items: center;
    padding: 0 15px;
    & > * {
        margin: 5px;
        color: #000;
    }
`;

const Search = styled(Box)`
    background-color: #ffffff;
    border-radius: 18px;
    width: calc(94% - 100px);
`;

const InputField = styled(InputBase)`
    width: 100%;
    padding: 20px;
    height: 20px;
    padding-left: 25px;
    font-size: 14px;  
`;


const Footer = ({ sendText, setValue, value, file, setFile, setImage }) => {

    useEffect(() => {
        const getImage = async() => {
            if (file) {
                const data = new FormData();
                data.append("name",file.name);
                data.append("file",file);

                let response = await uploadFile(data);
                // console.log(response);
                setImage(response.data);
            }
        }
        getImage();
    },   [file, setImage])

    const onFilechange = (e) => {
        setFile(e.target.files[0]);
        setValue(e.target.files[0].name);
        
    }


    return (

        <Container>
            <EmojiEmotionsOutlined
             style={{cursor:'pointer'}}/>
            <label htmlFor='fileInput'
                style={{cursor:'pointer'}}>
                <Attachment />
            </label>
             <input
                type='file'
                id='fileInput'
                style={{display: 'none'}}
                onChange={(e) => onFilechange(e)}
            />
            <Search> 
                <InputField 
                    placeholder='Type a message'
                    onChange={(e) => setValue(e.target.value)}
                    onKeyPress={(e) => sendText(e)}
                    value={value}
                />
            </Search>
            <Mic />
        </Container>
    )
}

export default Footer;