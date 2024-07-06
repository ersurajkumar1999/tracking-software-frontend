export const successResponse = (response) => {
    return { status: true, data: response?.data ?? null }
}
export const errorResponse = (response) => {
    return { status: true, massage: response?.data ?? null, data: null }
}