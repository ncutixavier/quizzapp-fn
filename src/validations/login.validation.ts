import * as yup from 'yup';

export const loginSchema = yup.object().shape({
    phoneNumber: yup
        .string()
        .matches(/^\d{10}$/, 'Phone number must be exactly 10 digits')
        .required('Phone number is required'),
});
