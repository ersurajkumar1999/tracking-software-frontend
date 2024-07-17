import axios from 'axios';
import { BASE_URL } from './config';
import { errorResponse, successResponse } from './ApiResponse';
import { GET_CREATE_LOG, GET_LAST_LOG, ME, SCREENSHOT_LIST, SCREENSHOT_UPLOAD } from './API_ENDPOINTS';
import { getToken } from './AuthService';
let service = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json',
        'Authorization': getToken(),
    }
});
const lastLogActivity = async (data) => {
    try {
        const response = await service.post(GET_LAST_LOG, data);
        return successResponse(response);
    } catch (error) {
        return errorResponse(error);
    }
}
const createActivityLog = async (data) => {
    try {
        const response = await service.post(GET_CREATE_LOG, data);
        return successResponse(response);
    } catch (error) {
        return errorResponse(error);
    }
}
const getScreenshotList = async (data) => {
    try {
        const response = await service.post(SCREENSHOT_LIST, data);
        return successResponse(response);
    } catch (error) {
        return errorResponse(error);
    }
}

const screenshotUpload = async (data) => {
    try {
        const response = await service.post(SCREENSHOT_UPLOAD, data);
        return successResponse(response);
    } catch (error) {
        return errorResponse(error);
    }
}
const getUserInfo = async () => {
    try {
        const response = await service.post(ME, {});
        return successResponse(response);
    } catch (error) {
        return errorResponse(error);
    }
}

export {
    lastLogActivity, createActivityLog, getScreenshotList, screenshotUpload, getUserInfo
}