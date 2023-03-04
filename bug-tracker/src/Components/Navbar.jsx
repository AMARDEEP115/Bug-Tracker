import { Button } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { Logout } from "../Redux/AuthReducer/action";
import "./Navbarr.css";

const Navbar=()=>{
    const isAuth=useSelector(store=>store.auth);
    const dispatch=useDispatch();
    const Navi=useNavigate();

    const handleLogout=()=>{
        dispatch(Logout());
        return Navi("/");
    }
    return <div id="Navbar">
        <Link to="/">HOME</Link>
        { !isAuth && <Link to="/signup">REGISTER</Link>}
        { !isAuth && <Link to="/signin">LOGIN</Link>}
        <Link to="/dashboard">DASHBOARD</Link>
        { isAuth && <Button colorScheme="teal" onClick={handleLogout}>LOGOUT</Button> }
    </div>
};

export {Navbar};