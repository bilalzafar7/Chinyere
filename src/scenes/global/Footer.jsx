  import { useTheme } from "@emotion/react";
  import { Box, Typography } from "@mui/material";

  function Footer() {
    const {
      palette: { primary },
    } = useTheme();
    return (
      <Box marginTop="70px" padding="30px" backgroundColor={primary.light} color="white">
        <Box
          width="80%"
          margin="auto"
          display="flex"
          justifyContent="space-between"
          flexWrap="wrap"
          fontFamily="Open Sans,sans-serif"
        >
          <Box width="clamp(20%, 20%, 30%)"  >
            <Typography variant="h4" fontWeight="bold" mb="25px">
              OUR COMPANY
            </Typography>
            <a href="https://www.chinyere.pk/pages/privacy-policy" style={{color:'white'}}>
            <Typography mb="15px">Privacy Policy</Typography>
            </a>

            <a href="https://www.chinyere.pk/pages/store-locator" style={{color:'white'}}>
            <Typography mb="15px">Store Locator</Typography>
            </a>
            <a href="https://www.chinyere.pk/pages/blogs" style={{color:'white'}}>
            <Typography mb="15px">Blogs</Typography>
            </a>
          </Box>

          <Box width="clamp(20%, 20%, 30%)" >
            <Typography variant="h4" fontWeight="bold" mb="25px">
              CUSTOMER CARE
            </Typography>
            <Typography mb="15px">Contact Us</Typography>
            <Typography mb="15px">Shipping and Handling</Typography>
            <Typography mb="15px">FAQ's</Typography>
            <Typography mb="15px">Exchanges</Typography>
            <Typography mb="15px">Size Guide</Typography>
            <Typography mb="15px">Track Your Order</Typography>
          </Box>

          <Box width="clamp(20%, 20%, 30%)">
            <Typography variant="h4" fontWeight="bold" mb="25px">
              SUPPORT
            </Typography>
            <Typography mb="15px">
              CUSTOMER SERVICES CALL:
              <br></br> 
              (+92) 3 111 555 259
            </Typography>
            <Typography mb="15px">
              CUSTOMER SERVICES WHATSAPP:
              <br></br> 
              (+92) 309 888 2333
            </Typography>
            <Typography mb="15px" sx={{ wordWrap: "break-word" }}>
              FOR COUTURES:
              <br></br>
              (+92) 32 257 52552-4
              <br></br>
              customercare@chinyere.pk
            </Typography>
            
          </Box>

          <Box width="clamp(17%, 20%, 30%)">
            <Typography variant="h4" fontWeight="bold" mb="25px">
              FOLLOW US
            </Typography>
            <a href="https://www.chinyere.pk/" style={{color:'white'}}>
            <Typography mb="15px">Chinyere.pk</Typography>
            </a>
            
            
          </Box>
        </Box>
        <Typography marginLeft="10%" mb="5px">________________________________________________________________________________________________________________________________</Typography>
        <Typography fontSize="10px" marginLeft="11%" mb="15px">@Chinyere.pk</Typography>
      </Box>
    );
  }

  export default Footer;
