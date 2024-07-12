import axios from 'axios';
import Cookies from 'js-cookie';
import { BASE_URL } from './config';
import { errorResponse, successResponse } from './ApiResponse';
import { AUTH_LOGIN, AUTH_SIGNUP, LOGIN_WITH_GOOGLE } from './API_ENDPOINTS';
let service = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json'
    }
});

const userLogin = async (data) => {
    try {
        const response = await service.post(AUTH_LOGIN, data);
        return successResponse(response);
    } catch (error) {
        return errorResponse(error);
    }
}
const userSignUp = async (data) => {
    try {
        const response = await service.post(AUTH_SIGNUP, data);
        return successResponse(response);
    } catch (error) {
        const message = {
            message: error?.message
        }
        return { status: false, data: error?.response?.data ?? message };
    }
}
const UserLoginWithGoogle = async (data) => {
    try {
        const response = await service.post(LOGIN_WITH_GOOGLE, data);
        return successResponse(response);
    } catch (error) {
        const message = {
            message: error?.message
        }
        return { status: false, data: error?.response?.data ?? message };
    }
}

const isUserExist = () => {
    return Cookies.get('user') ? true : false;
};

// get user name & email
const getCurrentUser = () => {
    return JSON.parse(Cookies.get('user') || '{}');
};

// get user id
const getUserId = () => {
    let user = JSON.parse(Cookies.get('user') || '{}');
    return parseInt(user.id);
};

const getToken = () => {
    return JSON.parse(Cookies.get('_session') || '{}');
};

const storeDataToStorage = (response) => {
    Cookies.set('user', JSON.stringify(response), { expires: 7 });
    Cookies.set('is_verified', JSON.stringify(response.isEmailVerified), { expires: 7 });
    Cookies.set('_session', JSON.stringify(response.token), { expires: 7 });
    Cookies.set('user_role', JSON.stringify(response.userType), { expires: 7 });
};


const logout = async () => {
    Cookies.remove('user');
    Cookies.remove('_rand');
    Cookies.remove('is_verified');
    Cookies.remove('_session');
    localStorage.clear();
};
export {
    userLogin, userSignUp, UserLoginWithGoogle, storeDataToStorage, getToken
}