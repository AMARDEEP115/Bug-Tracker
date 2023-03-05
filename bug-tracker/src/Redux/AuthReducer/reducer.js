import * as auth from "./actionTypes";

const initialState={
    isLoading:false,
    token:"",
    auth:true,
    isFailure:false
};

const Reducer=(state=initialState,action)=>{
    const {type,payload}=action;
    switch(type){
        case auth.AUTHREQUEST: return {...state,isLoading:true};
        case auth.AUTHSUCCESS: return {...state,isLoading:false,token:payload.token,auth:true};
        case auth.AUTHFAILURE: return {...state,isLoading:false,isFailure:true};
        case auth.AUTHLOGOUT:  return {...state,isLoading:false,token:"",auth:false};
        default: return state;
    }
}

export {Reducer};