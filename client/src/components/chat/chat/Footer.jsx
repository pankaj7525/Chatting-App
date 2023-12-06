import { useEffect } from 'react';
import { Box, InputBase, styled } from '@mui/material';
import { EmojiEmotionsOutlined, Attachment, Mic } from '@mui/icons-material';
import { uploadFile } from '../../../service/api';


const Container = styled(Box)`
    height: 65px;
    background:linear-gradient(45deg, #352F44  30%, #B9B4C7 30%, #FAF0E6 75%, #5C5470 30%);
    display: flex;
    width: 100%;
    align-items: center;
    padding: 6px 15px;
    & > * {
        margin: 8px;
        color: #ffffff;
    }
`;

const Search = styled(Box)`
    background-color: grey;
    border-radius: 18px;
    width: calc(94% - 100px);
`;

const InputField = styled(InputBase)`
    width: 100%;
    padding: 20px;
    height: 30px;
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
            {/* <Mic /> */}
        </Container>
    )
}

export default Footer;