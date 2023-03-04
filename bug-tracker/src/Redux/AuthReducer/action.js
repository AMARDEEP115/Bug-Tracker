import * as auth from "./actionTypes";

const getAuthRequest=()=>{
    return {type:auth.AUTHREQUEST};
}

const getAuthSuccess=(data)=>{
    return {type:auth.AUTHSUCCESS,payload:data};
}

const getAuthFailure=()=>{
    return {type:auth.AUTHFAILURE};
}

const getLoginAuth=(res)=>{
    return (dispatch)=>{
        dispatch(getAuthRequest());
        dispatch(getAuthSuccess(res));
        dispatch(getAuthFailure());
    }
}

const Logout=()=>{
    return {type:auth.AUTHLOGOUT};
}

export default getLoginAuth;

export {Logout};