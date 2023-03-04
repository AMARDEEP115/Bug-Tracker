import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom";

const PrivateRoute=({children})=>{
    const isAuth=useSelector(store=>store.auth);
    if(isAuth){
        return children;
    } else {
        return <Navigate to="/signin" />
    }
}

export default PrivateRoute;