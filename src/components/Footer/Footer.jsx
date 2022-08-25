import { Box } from "@mui/material";
import { Network, Networks, Shape, Text } from "./styles";
import {BsInstagram, BsFacebook, BsLinkedin} from 'react-icons/bs';

const Footer = () => {
    return <Box
    sx={{
      display:'flex',
      alignItems:'center',
      justifyContent:'center',
      padding:'0px 20px',
      flexDirection:'column',
      backgroundColor:'#040348',
      paddingBottom:'40px'
    }}
    >
      <Shape/>
        <Networks>
          <Network href="https://www.instagram.com/levi__13_/"><BsInstagram/></Network>
          <Network href="https://www.linkedin.com/in/levani-khaburzania-744b73160/"><BsLinkedin/></Network>
          <Network href="https://www.facebook.com/levani.xaburzania.3"><BsFacebook/></Network>
        </Networks>
        <Text>Made by Levan Khaburzania</Text>
    </Box>
}

export default Footer;