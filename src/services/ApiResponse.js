export const successResponse = (response) => {
    return { status: true, data: response?.data ?? null }
}
export const errorResponse = (error) => {
    console.log("error response",error);
    // let message = error?.message;
    
    return { status: false, massage: error?.response?.data?.message ?? error?.message, data: null }
}