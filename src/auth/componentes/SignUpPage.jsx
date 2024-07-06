import { useEffect, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';

// material-ui
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import {useFormik } from 'formik';

// project import
import AnimateButton from 'components/@extended/AnimateButton';
import { strengthColor, strengthIndicator } from 'utils/password-strength';

// assets
import EyeOutlined from '@ant-design/icons/EyeOutlined';
import EyeInvisibleOutlined from '@ant-design/icons/EyeInvisibleOutlined';
import { signUpSchema } from 'schemas/FormSchemas';
import { userSignUp } from 'services/AuthService';

const SignUpPage = () => {

  const [level, setLevel] = useState();
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const changePassword = (value) => {
    const temp = strengthIndicator(value);
    setLevel(strengthColor(temp));
  };

  useEffect(() => {
    changePassword('');
  }, []);

  const initialValues = {
    firstName: 'suraj',
    lastName: 'kumar',
    email: 'suraj1@gmail.com',
    password: '12345678',
    confirmPassword: '12345678',
    iAgree: false,
  };
  const {
    errors,
    handleBlur,
    handleChange,
    handleSubmit,
    touched, isSubmitting,
    values, resetForm
  } = useFormik({
    initialValues,
    validationSchema: signUpSchema,
    onSubmit: async (values, { setSubmitting }) => {
      const data = {
        firstName: values.firstName,
        lastName: values.lastName,
        email: values.email,
        password: values.password,
      };
      try {
        console.log("data", data);
        setSubmitting(true);
        const response = await userSignUp(data);
        console.log("response", response);
        // if (response.status) {
        //     resetForm();
        //     dispatch(setSuccessMessage(response.data.message));
        // } else {
        //     dispatch(setErrorMessage(response.data.message));
        // }
      } catch (error) {
        dispatch(setErrorMessage(error));
      } finally {
        setSubmitting(false);
      }
    },
  });
  console.log("errors",errors);
  return (
    <form noValidate onSubmit={handleSubmit}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Stack spacing={1}>
            <InputLabel htmlFor="firstname-signup">First Name*</InputLabel>
            <OutlinedInput
              id="firstname-login"
              type="text"
              value={values.firstName}
              name="firstName"
              onBlur={handleBlur}
              onChange={handleChange}
              placeholder="John"
              fullWidth
              error={Boolean(touched.firstName && errors.firstName)}
              disabled={isSubmitting} 
            />
          </Stack>
          {touched.firstName && errors.firstName && (
            <FormHelperText error id="helper-text-firstname-signup">
              {errors.firstName}
            </FormHelperText>
          )}
        </Grid>
        <Grid item xs={12} md={6}>
          <Stack spacing={1}>
            <InputLabel htmlFor="lastname-signup">Last Name*</InputLabel>
            <OutlinedInput
              fullWidth
              error={Boolean(touched.lastName && errors.lastName)}
              id="lastname-signup"
              type="lastname"
              value={values.lastName}
              name="lastName"
              onBlur={handleBlur}
              onChange={handleChange}
              placeholder="Doe"
              inputProps={{}}
              disabled={isSubmitting} 
            />
          </Stack>
          {touched.lastName && errors.lastName && (
            <FormHelperText error id="helper-text-lastname-signup">
              {errors.lastName}
            </FormHelperText>
          )}
        </Grid>
        {/* <Grid item xs={12}>
          <Stack spacing={1}>
            <InputLabel htmlFor="company-signup">Company</InputLabel>
            <OutlinedInput
              fullWidth
              error={Boolean(touched.company && errors.company)}
              id="company-signup"
              value={values.company}
              name="company"
              onBlur={handleBlur}
              onChange={handleChange}
              placeholder="Demo Inc."
              inputProps={{}}
            />
          </Stack>
          {touched.company && errors.company && (
            <FormHelperText error id="helper-text-company-signup">
              {errors.company}
            </FormHelperText>
          )}
        </Grid> */}
        <Grid item xs={12}>
          <Stack spacing={1}>
            <InputLabel htmlFor="email-signup">Email Address*</InputLabel>
            <OutlinedInput
              fullWidth
              error={Boolean(touched.email && errors.email)}
              id="email-login"
              type="email"
              value={values.email}
              name="email"
              onBlur={handleBlur}
              onChange={handleChange}
              placeholder="demo@company.com"
              inputProps={{}}
              disabled={isSubmitting} 
            />
          </Stack>
          {touched.email && errors.email && (
            <FormHelperText error id="helper-text-email-signup">
              {errors.email}
            </FormHelperText>
          )}
        </Grid>
        <Grid item xs={12}>
          <Stack spacing={1}>
            <InputLabel htmlFor="password-signup">Password</InputLabel>
            <OutlinedInput
              fullWidth
              error={Boolean(touched.password && errors.password)}
              id="password-signup"
              type={showPassword ? 'text' : 'password'}
              value={values.password}
              name="password"
              onBlur={handleBlur}
              onChange={(e) => {
                handleChange(e);
                changePassword(e.target.value);
              }}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                    color="secondary"
                  >
                    {showPassword ? <EyeOutlined /> : <EyeInvisibleOutlined />}
                  </IconButton>
                </InputAdornment>
              }
              placeholder="******"
              inputProps={{}}
              disabled={isSubmitting} 
            />
          </Stack>
          {touched.password && errors.password && (
            <FormHelperText error id="helper-text-password-signup">
              {errors.password}
            </FormHelperText>
          )}
          <FormControl fullWidth sx={{ mt: 2 }}>
            <Grid container spacing={2} alignItems="center">
              <Grid item>
                <Box sx={{ bgcolor: level?.color, width: 85, height: 8, borderRadius: '7px' }} />
              </Grid>
              <Grid item>
                <Typography variant="subtitle1" fontSize="0.75rem">
                  {level?.label}
                </Typography>
              </Grid>
            </Grid>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body2">
            By Signing up, you agree to our &nbsp;
            <Link variant="subtitle2" component={RouterLink} to="#">
              Terms of Service
            </Link>
            &nbsp; and &nbsp;
            <Link variant="subtitle2" component={RouterLink} to="#">
              Privacy Policy
            </Link>
          </Typography>
        </Grid>
        {errors.submit && (
          <Grid item xs={12}>
            <FormHelperText error>{errors.submit}</FormHelperText>
          </Grid>
        )}
        <Grid item xs={12}>
          <AnimateButton>
            <Button disableElevation disabled={isSubmitting} fullWidth size="large" type="submit" variant="contained" color="primary">
              Create Account
            </Button>
          </AnimateButton>
        </Grid>
      </Grid>
    </form>
  )
}

export default SignUpPage