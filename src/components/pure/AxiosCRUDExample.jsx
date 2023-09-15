import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import { login, getAllUsers, getAllPagedUsers, getUserByID, createUser, updateUserByID, deleteUserByID } from '../../services/axiosCRUDService';

const Axioscrudexample = () => {

    const initialCredentials = {
        email: '',
        password: ''
    }

    const loginSchema = Yup.object().shape(
        {
            email: Yup.string()
                .email('Invalid email format')
                .required('Email is required'),
            password: Yup.string().required('Password is required')
        }
    );

    const authUser = (values) => {
        login(values.email, values.password)
            .then((response) => {
                if (response.data.token) {
                    alert(JSON.stringify(response.data.token));
                    sessionStorage.setItem('token', response.data.token);
                } else {
                    sessionStorage.removeItem('token');
                    throw new Error('Login failure');
                }

            })
            .catch((error) => {
                alert(`Something went wrong: ${error}`);
                sessionStorage.removeItem('token');
            })
            .finally(() => console.log('Login done'))
    }

    // CRUD Examples
    const obtainAllUsers = async () => {
        try {
            let response = await getAllUsers()
            alert(JSON.stringify(response.data.data))
        } catch (error) {
            alert(`Something went wrong: ${error}`)
        }
    }

    const obtainAllPagedUsers = (page) => {
        getAllPagedUsers(page)
            .then((response) => {
                alert(JSON.stringify(response.data.data))
            })
            .catch((error) => {
                alert(`Something went wrong: ${error}`)
            })
    }

    const obtainUsersByID = async (id) => {
        // getUserByID(id)
        //     .then((response) => {
        //         alert(JSON.stringify(response.data.data))
        //     })
        //     .catch((error) => {
        //         alert(`Something went wrong: ${error}`)
        //     })
        try {
            let response = await getUserByID(id);
            alert(JSON.stringify(response.data.data))
        } catch (error) {
            alert(`Something went wrong: ${error}`)
        }
    }

    const createNewUser = async (name, job) => {
        try {
            let response = await createUser(name, job);
            if (response.data && response.status === 201) {
                alert(JSON.stringify(response.data))
            } else {
                throw new Error('User not created')
            }
        } catch (error) {
            alert(`Something went wrong: ${error}`)
        }
    }

    const updateUser = async (id, name, job) => {
        try {
            let response = await updateUserByID(id, name, job);
            if (response.data && response.status === 200) {
                alert(JSON.stringify(response.data))
            } else {
                throw new Error('User not found & no updated done')
            }
        } catch (error) {
            alert(`Something went wrong: ${error}`)
        }
    }

    const deleteUser = async (id) => {
        try {
            let response = await deleteUserByID(id);
            if (response.status === 204) {
                alert(`User with id: ${id} successfully deleted`)
            } else {
                throw new Error('User not found & no delete done')
            }
        } catch (error) {
            alert(`Something went wrong: ${error}`)
        }
    }


    return (
        <div>
            <h4>Login Formik</h4>
            <Formik
                // *** Initial values that the form will take
                initialValues={initialCredentials}
                // *** Yup Validation Schema ***
                validationSchema={loginSchema}
                // ** onSubmit Event
                onSubmit={async (values) => {
                    authUser(values)
                }}
            >
                {/* We obtain props from Formik */}

                {({ values,
                    touched,
                    errors,
                    isSubmitting,
                    handleChange,
                    handleBlur }) => (
                    <Form>
                        <label htmlFor="email">Email</label>
                        <Field id="email" type="email" name="email" placeholder="example@email.com" />

                        {/* Email Errors */}
                        {
                            errors.email && touched.email &&
                            (
                                <ErrorMessage name="email" component='div'></ErrorMessage>
                            )
                        }

                        <label htmlFor="password">Password</label>
                        <Field
                            id="password"
                            name="password"
                            placeholder="password"
                            type='password'
                        />
                        {/* Password Errors */}
                        {
                            errors.password && touched.password &&
                            (
                                <ErrorMessage name="password" component='div'></ErrorMessage>
                            )
                        }
                        <button type="submit">Login</button>
                        {isSubmitting ? (<p>Login your credentials...</p>) : null}
                    </Form>
                )}
            </Formik>
            {/* Example buttons to test API responses */}
            <div>
                <button onClick={obtainAllUsers}>
                    Get All Users with Axios
                </button>
                <button onClick={() => obtainAllPagedUsers(1)}>
                    Get All Users (Page 1) with Axios
                </button>
                <button onClick={() => obtainUsersByID(1)}>
                    Get User 1
                </button>
                <button onClick={() => createNewUser('morpheus', 'leader')}>
                    Create User
                </button>
                <button onClick={() => updateUser(1, 'morpheus', 'Developer')}>
                    Update User
                </button>
                <button onClick={() => deleteUser(1)}>
                    Delete User
                </button>
            </div>

        </div>
    );
}

export default Axioscrudexample;
