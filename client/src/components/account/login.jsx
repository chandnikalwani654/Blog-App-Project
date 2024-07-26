import {useState} from "react";

import {Box,TextField,Button,styled,Typography} from "@mui/material";
//Typography is the replacement for p tag
const Component=styled(Box)`
   width:400px;
   margin:auto;
   box-shadow: 5px 2px 5px 2px rgb(0 0 0/0.6);
`
// const Image1=styled("img")({
//     width:300,
//     margin:"auto",
//     display:"flex",
//     padding:"50px 0 0",
//     bordeRadius:"4",
//     position: "relative",
//     zIndex: "1",
//     top: "0",
//     left: "0" 

// });
// const Image2=styled("img")({
//     padding:"116px 0 0 485px",
//     position: "absolute",
//     zIndex: "2",
//     top: "0",
//     left: "0",
//     width: "6.5%",
//     height:"auto"
   
// });
const Image=styled("img")({
   width:100,
   margin:"auto", //margin auto display flex ke saath chalta h
   display:"flex",
   padding:"50 0 0",
   


})

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
   background:#FB641B;
   color:#fff;
   height:48px;
   border-radius:2px;
`

const SignupButton=styled(Button)`
   text-transform:none;
   background:#fff;
   color:#2874f0;
   height:48px;
   border-radius:2px;
   box-shadow:0 2px 4px 0 rgb(0 0 0/20%);
`

const Text=styled(Typography)`
    color:#878787;
    font-size:14px;

`

const signupInitialValues={
    name:"",
    username: "",
    password:""
}

const Login = ()  => {
   // const imageURL1 = 'https://cdn.dribbble.com/userupload/12426546/file/original-c1141e517b6528ed41375d95dfea6a21.jpg?resize=1600x1200';
   // const imageURL2 = 'https://www.sesta.it/wp-content/uploads/2021/03/logo-blog-sesta-trasparente.png';
   const imageURL='https://www.sesta.it/wp-content/uploads/2021/03/logo-blog-sesta-trasparente.png';

   const[account,toggleAccount]= useState("login");
   const[signup,setSignup]=useState(signupInitialValues);

   const toggleSignUp= () =>{
      account==="signup" ? toggleAccount("login"):toggleAccount("signup");
   }
   const onInputChange = (e)  => {
        setSignup({...signup,[e.target.name]:e.target.value});
   }
   return (
        <Component>
           <Box>
             {/* <Image1 src={imageURL1} alt="login" />
             <Image2 src={imageURL2} alt="blog" /> */}
             <Image src={imageURL} alt="blog"></Image>
             {
               account==="login" ? 
             <Wrapper>
                <TextField id="standard-basic" label="Enter Username" variant="standard" />
                <TextField id="standard-basic" label="Enter Password" variant="standard" />
                <LoginButton variant="contained">Login</LoginButton>
                <Text style={ {textAlign:"center"}}>OR</Text> 
                <SignupButton onClick={()=>toggleSignUp()}>Create an Account</SignupButton>
             </Wrapper>

             :

        
             <Wrapper>
               <TextField id="standard-basic" onChange={(e)=>onInputChange(e)} name="name" label="Enter Name" variant="standard" />
                <TextField id="standard-basic"  onChange={(e)=>onInputChange(e)} name="username" label="Enter Username" variant="standard" />
                <TextField id="standard-basic"  onChange={(e)=>onInputChange(e)} name="password" label="Enter Password" variant="standard" />
                <SignupButton >Signup</SignupButton>
                <Text style={ {textAlign:"center"}}>OR</Text> 
                <LoginButton variant="contained" onClick={()=>toggleSignUp()}>Already have an Account</LoginButton>
             </Wrapper>
             }
            </Box>
        </Component>
)
}
export default Login;