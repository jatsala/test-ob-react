import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const loginShema = Yup.object().shape(
    {
        email: Yup.string()
            .email('Invalid email format')
            .required('Email is required'),
        password: Yup.string().required('Password is required')
    }
);

const LoginFormik = () => {

    const initialCredentials = {
        email: '',
        password: ''
    }

    const navigate = useNavigate();

    return (
        <div>
            <h4>Login Form</h4>
            <Formik
                // *** Initial values that the form will take
                initialValues={initialCredentials}
                // **** Yup validation Shema ****
                validationSchema={loginShema}
                // *** onSubmit Event
                onSubmit={async (values) => {
                    await new Promise((r) => setTimeout(r, 1000));
                    alert(JSON.stringify(values, null, 2));
                    // We save the data in the localstorage
                    await localStorage.setItem('credentials', values);
                    navigate('/profile');
                }}
            >

                {/* we obtain props from Fromik */}
                {({ values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    isSubmitting }) => (
                    <Form>
                        <label htmlFor="email">Email</label>
                        <Field id="email" type="email" name="email" placeholder="example@email.com" />

                        {/* Email Errors */}
                        {
                            errors.email && touched.email &&
                            (
                                <ErrorMessage name='email' component='div'></ErrorMessage>
                            )
                        }

                        <label htmlFor="password">Password</label>
                        <Field
                            id="password"
                            name="password"
                            placeholder="password"
                            type="password"
                        />
                        {/* Password Errors */}
                        {
                            errors.password && touched.password &&
                            (
                                <ErrorMessage name='password' component='div' ></ErrorMessage>
                            )
                        }

                        <button type="submit">Login</button>
                        {isSubmitting ? (<p>Login your credentials...</p>) : null}
                    </Form>
                )}
            </Formik>
        </div>
    );
}

export default LoginFormik;
