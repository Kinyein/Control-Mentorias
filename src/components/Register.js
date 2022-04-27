import { Formik } from "formik";
import * as yup from "yup";
import React from "react";
import { FcGoogle } from 'react-icons/fc'
import { BsFacebook } from 'react-icons/bs'
import { useDispatch } from "react-redux";
import { registerAsync } from "../Redux/actions/registerActions";
import { LoginGoogleFace } from "../styles/styledComp/formsStyle";
import { loginGoogle } from "../Redux/actions/loginActions";

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
		<div>
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
							Submit
						</button>

						<LoginGoogleFace>
							<FcGoogle className='icon' onClick={handleGoogle} />
							<BsFacebook className='icon' />
						</LoginGoogleFace>
					</form>
				)}
			</Formik>
		</div>
	);
};

export default Register;
