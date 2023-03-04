import { Route, Routes } from "react-router-dom"
import Dashboard from "../Pages/Dashboard"
import Home from "../Pages/Home"
import Signin from "../Pages/Signin"
import Signup from "../Pages/Signup"
import PrivateRoute from "./PrivateRoute"

const MainRouter=()=>{
    return <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/signin" element={<Signin/>} />
        <Route path="/dashboard" element={<PrivateRoute><Dashboard/></PrivateRoute>} />
    </Routes>
}

export default MainRouter;