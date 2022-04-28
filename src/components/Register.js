import { Formik } from "formik";
import * as yup from "yup";
import React from "react";
import { BsFacebook, BsGoogle } from 'react-icons/bs'
import { useDispatch } from "react-redux";
import { registerAsync } from "../Redux/actions/registerActions";
import { ContainerForm, LoginGoogleFace } from "../styles/styledComp/formsStyle";
import { loginGoogle } from "../Redux/actions/loginActions";
import { Link } from "react-router-dom";

let schema = yup.object().shape({
	name: yup.string().required("Campo Requerido"),
	password: yup.string().min(6, 'La contraseña no debe ser menor a 6 caracteres').required("Campo Requerido"),
	email: yup
		.string()
		.email("Debe escribir un correo valido")
		.required("Campo Requerido"),
});

const Register = () => {
	const dispatch = useDispatch();

	const handleGoogle = () => {
		dispatch(loginGoogle())
	}

	return (
		<ContainerForm>
			<h1>Register</h1>
			<Formik
				initialValues={{
					name: "",
					password: "",
					email: "",
				}}
				validationSchema={schema}
				onSubmit={(values) => {
					dispatch(registerAsync(values));
					console.log(values);
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
							name="name"
							placeholder="User Name"
							onChange={handleChange}
							onBlur={handleBlur}
							value={values.name}
						/>
						{errors.name && touched.name ? (
							<div>{errors.name}</div>
						) : null}

						<input
							type="password"
							name="password"
							placeholder="Password"
							onChange={handleChange}
							onBlur={handleBlur}
							value={values.password}
						/>
						{errors.password && touched.password ? (
							<div>{errors.password}</div>
						) : null}

						<input
							name="email"
							placeholder="Correo"
							onChange={handleChange}
							onBlur={handleBlur}
							value={values.email}
						/>
						{errors.email && touched.email ? (
							(<div>{errors.email}</div>)
						) : null}

						<button type="submit">
							Register
						</button>

						<LoginGoogleFace>
							<div onClick={handleGoogle} className='iconContainer iconContainerGoogle'><BsGoogle className='icon iconGoogle' /> <p>Inicia Sesión con Google</p></div>
							<div className='iconContainer iconContainerFacebook'><BsFacebook className='icon iconFacebook' /> <p>Inicia Sesión con Facebook</p></div>
						</LoginGoogleFace>

						<p>¿Ya tienes cuenta? <Link to="/login"> Inicia sesión </Link></p>
					</form>
				)}
			</Formik>
		</ContainerForm>
	);
};

export default Register;
