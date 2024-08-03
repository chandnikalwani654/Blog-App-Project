import axios from 'axios';

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

const processError = (error) => {
    if(error.response){
        //Request made and server responded with a status other that falls out of the range 2.x.x(200)
        
    } else if(error.request){
        //Request made but no response was received
        
    } else {
        //Something happened in setting up request that triggers an error 

    }
}

