import { Formik } from 'formik';
import * as yup from 'yup';
import React from 'react'

let schema = yup.object().shape({
    names: yup.string().required('Campo Requerido'),
    lastNames: yup.string().required('Campo Requerido'),
    academicProgram: yup.string().required('Campo Requerido'),
    semester: yup.string().required('Campo Requerido'),
    cedula: yup.number('Debe escribir un numero valido').required('Campo Requerido'),
    tel: yup.number('Debe escribir un numero valido').min(10).required('Campo Requerido'),
    email: yup.string().email('Debe escribir un correo valido').required('Campo Requerido')
});

const AddMonitor = () => {
    return (
        <div>
            <h1>Añadir Monitor</h1>
            <Formik
                initialValues={{
                    names: '',
                    lastNames: '',
                    academicProgram: '',
                    semester: '',
                    cedula: '',
                    tel: '',
                    email: ''
                }}
                validationSchema={schema}

                onSubmit={(values) => {
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
                            name="names"
                            placeholder='Nombres'
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.names}
                        />
                        {errors.names && touched.names && errors.names}
                        <input
                            name="lastNames"
                            placeholder='Apellidos'
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.lastNames}
                        />
                        {errors.lastNames && touched.lastNames && errors.lastNames}
                        <input
                            name="academicProgram"
                            placeholder='Programa Academico'
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.academicProgram}
                        />
                        {errors.academicProgram && touched.academicProgram && errors.academicProgram}
                        <input
                            name="semester"
                            placeholder='Semestre'
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.semester}
                        />
                        {errors.semester && touched.semester && errors.semester}
                        <input
                            name="cedula"
                            placeholder='Cedula'
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.cedula}
                        />
                        {errors.cedula && touched.cedula && errors.cedula}
                        <input
                            name="tel"
                            placeholder='Telefono'
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.tel}
                        />
                        {errors.tel && touched.tel && errors.tel}
                        <input
                            name="email"
                            placeholder='Correo'
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.email}
                        />
                        {errors.email && touched.email && errors.email}
                        <button type="submit" disabled={isSubmitting}>
                            Submit
                        </button>
                    </form>
                )}
            </Formik>
        </div>
    )
}

export default AddMonitor