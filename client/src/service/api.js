import axios from 'axios';

import { API_NOTIFICATION_MESSAGES } from '../constants/config';

const API_URL='https://localhost:8000';

const axiosInstance=axios.create({
    baseURL: API_URL,
    timeout:10000,
    headers:{
        "content-type":"application/json"
    }
})

axiosInstance.interceptors.request.use(
    function (config){
        return config;
    },
    function (error){
        return Promise.reject(error);
    }
)

axiosInstance.interceptors.response.use(
    function (response){
        //Stop Global Loader
        return processResponse(response);
    },
    function (error){
        //Stop Global Loader
        return Promise.reject(processError(error));
    }
) 


/////////////////////////////
//If success -> return {isSuccess:true , data:Object}
//If fail -> return {isFailure:true , status:string , msg:string , code:int}
/////////////////////////////

const processResponse = (response) => {
    if(response?.status===200){
      return{ isSuccess:true , data : response.data }
    } else {
        return{ isFailure:true , status: response?.status , msg: response?.msg, code:response?.code }
    }
}

/////////////////////////////
//If success -> return {isSuccess:true , data:Object}
//If fail -> return {isFailure:true , status:string , msg:string , code:int}
/////////////////////////////

const processError = (error) => {
    if(error.response){
        //Request made and server responded with a status other that falls out of the range 2.x.x(200)
        console.log('ERROR IN RESPONSE:',error.toJSON());
        return{
            isError:true,
            msg:API_NOTIFICATION_MESSAGES.responseFailure,
            code:error.response.status
        }
    } else if(error.request){
        //Request made but no response was received(eg- frontend not connected to backend)
        console.log('ERROR IN REQUEST:',error.toJSON());
        return{
            isError:true,
            msg:API_NOTIFICATION_MESSAGES.requestFailure,
            code:""
        }
    } else {
        //Something happened in setting up request that triggers an error(front-end mai kuch problem h) 
        console.log('ERROR IN NETWORK:',error.toJSON());
        return{
            isError:true,
            msg:API_NOTIFICATION_MESSAGES.networkError,
            code:""
        }
    }
}

