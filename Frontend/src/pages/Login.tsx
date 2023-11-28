import { Box, Button, Typography } from '@mui/material'
import { IoLogIn } from "react-icons/io5";
import CustomizedInput from '../components/shared/CustomizedInput'

function Login() {
  return (
    <Box width={'100%'} height={'100%'} display={'flex'} flex={1}>
      <Box
      padding={8}
      mt={8}
      display={{md:"flex", sm:"none", xs:"none"}}
      
      >
        <img src='MERN AI.png' 
        alt='robot' 
        style={{
          width:"400px", 
          borderRadius:"20px", 
          boxShadow:"10px 10px 20px #000",
          }}/>
      </Box>
      <Box 
      display={"flex"} 
      flex={{xs:1, md: 0.5}}
      justifyContent={"center"}
      alignItems={"center"}
      padding={2}
      ml={"auto"}
      mt={16}
      >

        <form
        style={{
          margin:"auto",
          padding:"30px",
          boxShadow:"10px 10px 20px #000",
          borderRadius:"20px",
          border:"none",
        }}
        >
          <Box
          sx={{
            display:"flex",
            flexDirection:"column",
            justifyContent:"center",
          }}
          >
            <Typography
            variant='h2'
            textAlign={'center'}
            padding={2}
            fontWeight={600}
            >
              Login
            </Typography>
            <CustomizedInput type='email' name='email' label='Email' />
            <CustomizedInput type='password' name='password' label='Password' />
            <Button
            sx={{
              px: 2,
              py: 1,
              width: "400px",
              borderRadius: 2,
              bgcolor: "#F4F27E",
              ":hover":{
                bgcolor:"white",
                color:"black",
              }
            }}
            endIcon = {<IoLogIn/>}
            >Log In</Button>
          </Box>
        </form>
      </Box>
    </Box>
  )
}

export default Login