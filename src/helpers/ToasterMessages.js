import { toast } from 'react-toastify';

export const successMessage = (message) => {
    toast.success(message ?? "Success message!");
}
export const errorMessage = (message) => {
    toast.error(message ?? "Error message!");
}
export const warningMessage = (message) => {
    toast.warn(message ?? "Warning message!");
}