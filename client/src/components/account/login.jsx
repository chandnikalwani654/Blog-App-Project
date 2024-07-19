import {Box,TextField,Button,styled,Typography} from "@mui/material";
//Typography is the replacement for p tag
const Component=styled(Box)`
   width:400px;
   margin:auto;
   box-shadow: 5px 2px 5px 2px rgb(0 0 0/0.6);
`
const Image=styled("img")({
    width:100,
    margin:"auto",
    display:"flex",
    padding:"50px 0 0"

});

const Wrapper=styled(Box)`
   padding: 25px 35px;
   display: flex;
   flex:1;
   flex-direction:column;
   & > div, & > button, & > p{   /* For applying css on the child (TextField) */
      margin-top: 20px;
   };
`

const LoginButton=styled(Button)`
   text-transform:none;


`

const Login=()=>{
    const imageURL="https://img.freepik.com/free-photo/toy-bricks-table_144627-48267.jpg?t=st=1721371261~exp=1721374861~hmac=6e3d626d933e92824d4b752aa3df2253cbc9e3c0dc50e00e56c757d7cb7ef27e&w=826"
    return (
        <Component>
           <Box>
             <Image src={imageURL} alt="login" />
             <Wrapper>
                <TextField id="standard-basic" label="Username" variant="standard" />
                <TextField id="standard-basic" label="Password" variant="standard" />
                <LoginButton variant="contained">Login</LoginButton>
                <Typography style={ {textAlign:"center"}}>OR</Typography> 
                <Button >Create an Account</Button>
             </Wrapper>
            </Box>
        </Component>
)
}
export default Login;