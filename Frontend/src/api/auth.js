import axios from "../config/axiosConfig";


export const loginApi = async (body) => {
    try {
        const response = await axios.post('/v1/login', {body});
        console.log(response.data);
        return response.data;
    } catch (error) {   
        console.error('Error calling loginApi:', error);
        return null;
    }
}


export const registerApi = async (body) => {
    try {
        const response = await axios.post('/v1/register', {body});
        return response.data;
    } catch (error) {   
        console.error('Error calling registerApi:', error);
        return null;
    }
}