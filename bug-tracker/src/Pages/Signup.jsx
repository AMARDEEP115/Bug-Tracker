import React from "react";
import { Button, Heading, Input, Text, useToast } from "@chakra-ui/react";
import "./LoginRegi.css";
import { Link, useNavigate } from "react-router-dom";

const initialCredentials={
    email:"",
    password:""
};

const Signup=()=>{
    const [credentials,setCredentials]=React.useState(initialCredentials);
    const toast = useToast();
    const Navi=useNavigate();

    const handleRegister=(e)=>{
        e.preventDefault();
        let res=fetch("http://localhost:8080/user/register",{
            method:"POST",
            body:JSON.stringify(credentials),
            headers:{
                "COntent-Type":"application/json"
            }
        }).then((res)=>res.json()).then((res)=>{
            if(res.message==='Registered Succesfully'){
                toast({
                    title: 'Account Created',
                    description: "We've created your account for you.",
                    status: 'success',
                    duration: 2000,
                    position: "top",
                    isClosable: true,
                });
                return Navi("/signin");
            } else if(res.message==='already registered'){
                toast({
                    title: 'Account Available',
                    description: "Account with this email id alredy registered",
                    status: 'warning',
                    duration: 2000,
                    position: "top",
                    isClosable: true,
                });
            } else {
                toast({
                    title: 'Error',
                    description: "something went wrong",
                    status: 'error',
                    duration: 2000,
                    position: "top",
                    isClosable: true,
                });
            }
        }).catch(err=>console.log(err));
    }
    return <div id="forM">
        <form onSubmit={(e)=>handleRegister(e)} id="fORM">
            <Heading size="md">Email</Heading>
            <Input size='lg' type="email" placeholder="Enter Your Email" onChange={(e)=>setCredentials({...credentials,email:e.target.value})} />
            <Heading size="md">Password</Heading>
            <Input size='lg' type="password" placeholder="Enter Your Password" onChange={(e)=>setCredentials({...credentials,password:e.target.value})}/>
            <Button colorScheme="blue" type="submit">REGISTER</Button>
        </form>
        <Text>Have an account ? <Link to="/signin"  id="navI">Login</Link></Text>
    </div>
};

export default Signup;