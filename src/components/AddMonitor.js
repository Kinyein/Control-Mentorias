import { Formik } from 'formik';
import * as yup from 'yup';
import React from 'react'
import { useDispatch } from 'react-redux';
import { addMonitorAsync } from '../Redux/actions/monitoresActions';
import { ContainerForm, Error } from '../styles/styledComp/formsStyle';

let schema = yup.object().shape({
    names: yup.string().required('Campo Requerido'),
    lastNames: yup.string().required('Campo Requerido'),
    academicProgram: yup.string().required('Campo Requerido'),
    semester: yup.string().required('Campo Requerido'),
    cedula: yup.string().required('Campo Requerido'),
    tel: yup.number('Debe escribir un numero valido').min(10).required('Campo Requerido'),
    email: yup.string().email('Debe escribir un correo valido').required('Campo Requerido')
});

const AddMonitor = () => {

    const dispatch = useDispatch()

    return (
        <ContainerForm>
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
                    dispatch(addMonitorAsync(values))
                    console.log(values)
                }}
            >
                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit
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
                        {errors.names && touched.names ? (
                            <Error>{errors.names}</Error>
                        ) : null}
                        <input
                            name="lastNames"
                            placeholder='Apellidos'
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.lastNames}
                        />
                        {errors.lastNames && touched.lastNames ? (
                            <Error>{errors.lastNames}</Error>
                        ) : null}
                        <input
                            name="academicProgram"
                            placeholder='Programa Academico'
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.academicProgram}
                        />
                        {errors.academicProgram && touched.academicProgram ? (
                            <Error>{errors.academicProgram}</Error>
                        ) : null}
                        <input
                            name="semester"
                            placeholder='Semestre'
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.semester}
                        />
                        {errors.semester && touched.semester ? (
                            <Error>{errors.semester}</Error>
                        ) : null}
                        <input
                            name="cedula"
                            placeholder='Cedula'
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.cedula}
                        />
                        {errors.cedula && touched.cedula ? (
                            <Error>{errors.cedula}</Error>
                        ) : null}
                        <input
                            name="tel"
                            placeholder='Telefono'
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.tel}
                        />
                        {errors.tel && touched.tel ? (
                            <Error>{errors.tel}</Error>
                        ) : null}
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

                        <button type="submit">
                            Agregar
                        </button>
                    </form>
                )}
            </Formik>
        </ContainerForm>
    )
}

export default AddMonitor