import axios from 'axios';
import { BASE_URL } from './config';
import { successResponse } from './ApiResponse';
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
        const message = {
            message: error?.message
        }
        return { status: false, data: error?.response?.data ?? message };
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
export {
    userLogin, userSignUp, UserLoginWithGoogle
}