import { isAxiosError } from "axios";

export const getApiErrorMessage = (err: unknown)=>{
let message = 'An error occured, please try again later';
if(isAxiosError(err)){
    message = err.response?.data?.message || err.message;
    return message
}
if(err instanceof Error) {
    message = err.message
}
return message
}