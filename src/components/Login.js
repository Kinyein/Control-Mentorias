import { Formik } from 'formik';
import * as yup from 'yup';
import React from 'react'
import { BsFacebook, BsGoogle } from 'react-icons/bs'
import { useDispatch } from 'react-redux';
import { loginAsync, loginFacebook, loginGoogle } from '../Redux/actions/loginActions';
import { ContainerForm, Error, LoginGoogleFace } from '../styles/styledComp/formsStyle';
import { Link } from 'react-router-dom';

let schema = yup.object().shape({
    email: yup.string().email('Debe escribir un correo valido').required('Campo Requerido'),
    password: yup.string().required('Campo Requerido')
});

const Login = () => {

    const dispatch = useDispatch()

    return (
        <ContainerForm>
            <h1>Login</h1>
            <Formik
                initialValues={{
                    email: '',
                    password: ''
                }}
                validationSchema={schema}

                onSubmit={(values) => {
                    dispatch(loginAsync(values))
                    console.log(values)
                }}
            >
                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting,
                    /* and other goodies */
                }) => (
                    <form onSubmit={handleSubmit}>
                        <input
                            name="email"
                            placeholder='Correo'
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.email}
                        />
                        {errors.email && touched.email ? (
                            <Error>{errors.email}</Error>
                        ) : null}

                        <input
                            type="password"
                            name="password"
                            placeholder='Password'
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.password}
                        />
                        {errors.password && touched.password ? (
                            <Error>{errors.password}</Error>
                        ) : null}

                        <button type="submit">
                            Login
                        </button>



                        <LoginGoogleFace>
                            <div onClick={() => dispatch(loginGoogle())} className='iconContainer iconContainerGoogle'><BsGoogle className='icon iconGoogle' /> <p>Inicia Sesión con Google</p></div>
                            <div onClick={() => dispatch(loginFacebook())} className='iconContainer iconContainerFacebook'><BsFacebook className='icon iconFacebook' /> <p>Inicia Sesión con Facebook</p></div>
                        </LoginGoogleFace>

                        <p>¿No tienes cuenta? <Link to="/register"> Registrate </Link></p>
                    </form>
                )}
            </Formik>

            
        </ContainerForm>
    )
}

export default Login