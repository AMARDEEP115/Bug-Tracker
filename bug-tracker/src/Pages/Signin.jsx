import React from "react";
import {Link, useNavigate} from "react-router-dom";
import { Button, Heading, Input, Text, useToast } from "@chakra-ui/react";
import "./LoginRegi.css";
import { useDispatch } from "react-redux";
import getLoginAuth from "../Redux/AuthReducer/action";
import { useSelector } from "react-redux";

const initialCredentials={
    email:"",
    password:""
};

const Signin=()=>{
    const [credentials,setCredentials]=React.useState(initialCredentials);
    const toast = useToast();
    const Navi=useNavigate();
    const dispatch=useDispatch();
    const message=useSelector(store=>store.message);
    
    const handleLogin=(e)=>{
        e.preventDefault();
        
        
        let res=fetch("http://localhost:8080/user/login",{
            method:"POST",
            body:JSON.stringify(credentials),
            headers:{
                "COntent-Type":"application/json"
            }
        }).then((res)=>res.json()).then((res)=>{
            if(res.message==="Login Succesfull"){
                toast({
                    title: 'Login Succesfull',
                    description: "Succesfully Logged In",
                    status: 'success',
                    duration: 2000,
                    position: "top",
                    isClosable: true,
                });
                localStorage.setItem("token_bug",`${res.token}`);
                dispatch(getLoginAuth({token:res.token}));
                return Navi("/dashboard");
            } else if(res.message==="Wrong Password"){
                toast({
                    title: 'Wrong Password',
                    description: "Please enter correct password",
                    status: 'warning',
                    duration: 2000,
                    position: "top",
                    isClosable: true,
                });
            } else if(res.message==="user not found"){
                toast({
                    title: 'Not Found',
                    description: "User Not found with this email, try to register",
                    status: 'warning',
                    duration: 2000,
                    position: "top",
                    isClosable: true,
                });
            } else {
                toast({
                    title: 'unable to login',
                    description: "Something went wrong",
                    status: 'warning',
                    duration: 2000,
                    position: "top",
                    isClosable: true,
                });
            }
        }).catch(err=>console.log(err));
    }
    return <div id="forM">
        <form onSubmit={(e)=>handleLogin(e)} id="fORM">
            <Heading size="md">Email</Heading>
            <Input size='lg' type="email" placeholder="Enter Your Email" onChange={(e)=>setCredentials({...credentials,email:e.target.value})} />
            <Heading size="md">Password</Heading>
            <Input size='lg' type="password" placeholder="Enter Your Password" onChange={(e)=>setCredentials({...credentials,password:e.target.value})}/>
            <Button colorScheme="blue" type="submit">LOGIN</Button>
        </form>
        <Text>Don't have an account ? <Link to="/signup" id="navI">Register</Link></Text>
    </div>
};

export default Signin;