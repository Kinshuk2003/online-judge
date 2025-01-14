import axios from "../config/axiosConfig";


export const loginApi = async (body) => {
    try {
        const response = await axios.post('/v1/login', {body});
        if (response.status === 200) {
            console.log('Login successful');
            return response.data;
        }else {
            console.log('Login failed');
            return null;
        }        
    } catch (error) {   
        console.error('Error calling loginApi:', error);
        return null;
    }
}


export const registerApi = async (body) => {
    try {
        const response = await axios.post('/v1/register', {body});
        if (response.status === 200) {
            console.log('Login successful');
            return response.data;
        }else {
            console.log('Login failed');
            return null;
        }   
    } catch (error) {   
        console.error('Error calling registerApi:', error);
        return null;
    }
}