import * as Yup from 'yup';

export const loginSchema = Yup.object({
    email: Yup.string().email('Must be a valid email').max(255).required('Email is required'),
    password: Yup.string().max(20).required('Password is required'),
    rememberMe: Yup.boolean(), // Add Yup boolean schema for rememberMe field
});

export const signUpSchema = Yup.object({
    firstName: Yup.string().min(3).max(20).required('Please enter your first name'),
    lastName: Yup.string().min(3).max(20).required('Please enter your last name'),
    // email: Yup.string().email().required('Please enter your email'),
    email: Yup.string()
        .matches(
            /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
            'Invalid email address'
        )
        .required('Please enter your email'),
    password: Yup.string().min(6).required('Please enter your password'),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
        .required('Please confirm your password'),
    iAgree: Yup.boolean().oneOf([true], 'You must agree before submitting.').required('You must agree before submitting.'),
});

export const forgotPasswordSchema = Yup.object({
    email: Yup.string().email().required("Please enter your email"),
});

export const forgotPasswordFormSchema = Yup.object({
    password: Yup.string().min(6).required('Please enter your password'),
});

export const editProfileSchema = Yup.object({
    firstName: Yup.string().min(2).max(20).required('Please enter your first name'),
    lastName: Yup.string().min(2).max(20).required('Please enter your last name'),
    displayName: Yup.string().optional(),
    // displayName: Yup.string().optional(),
    // about: Yup.string().optional(),
    // gender: Yup.string().optional(),
    // dateOfBirth: Yup.string().optional(),
    // mobile: Yup.string().matches(/^[0-9]{10}$/, 'Mobile number is not valid').required('Please enter your mobile number'),
});


export const userNameSchema = Yup.object({
    userName: Yup.string().min(3).max(30).required("Please enter your user name!"),
});

export const changePasswordSchema = Yup.object({
    oldPassword: Yup.string().min(6).max(30).required('Please enter your current password'),
    newPassword: Yup.string().min(6).max(30).required('Please enter your new password'),
    confirmPassword: Yup.string().oneOf([Yup.ref('newPassword'), null], 'Passwords must match')
        .required('Please confirm your new password'),
});

export const addressInformationSchema = Yup.object({
    country: Yup.string().min(6).max(30).required('Please select country!'),
    state: Yup.string().min(6).max(30).required('Please select state'),
    city: Yup.string().min(6).max(30).required('Please select city'),
    address1: Yup.string().min(6).max(30).required('Please enter your address line 1'),
    address2: Yup.string().optional(),
    pinCode: Yup.string().min(6).max(6).required('Please enter your pin code'),
});
export const socialMediaSchema = Yup.object({
    platform: Yup.string().required('Please select platform!'),
    link: Yup.string().required('Please enter link!'),
    visibility: Yup.string().required('Please select visibility!'),
});