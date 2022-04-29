import { Formik } from 'formik';
import * as yup from 'yup';
import React from 'react'
import { useDispatch } from 'react-redux';
import { ContainerForm, Error } from '../styles/styledComp/formsStyle';
import { addMonitoriaAsync } from '../Redux/actions/monitoriasActions';

let schema = yup.object().shape({
    materia: yup.string().required('Campo Requerido'),
    monitor: yup.string().required('Campo Requerido'),
    date: yup.string().required('Campo Requerido'),
    salon: yup.string().required('Campo Requerido'),
});

const AddMonitorias = () => {

    const dispatch = useDispatch()

    return (
        <ContainerForm>
            <h1>Añadir Monitoria</h1>
            <Formik
                initialValues={{
                    materia: '',
                    monitor: '',
                    date: '',
                    salon: ''
                }}
                validationSchema={schema}

                onSubmit={(values) => {
                    dispatch(addMonitoriaAsync(values))
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
                            name="materia"
                            placeholder='Materia'
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.materia}
                        />
                        {errors.materia && touched.materia ? (
                            <Error>{errors.materia}</Error>
                        ) : null}
                        <input
                            name="monitor"
                            placeholder='Monitor Asignado'
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.monitor}
                        />
                        {errors.monitor && touched.monitor ? (
                            <Error>{errors.monitor}</Error>
                        ) : null}
                        <input
                            type="date"
                            name="date"
                            placeholder='Fecha'
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.date}
                        />
                        {errors.date && touched.date ? (
                            <Error>{errors.date}</Error>
                        ) : null}
                        <input
                            name="salon"
                            placeholder='Salon'
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.salon}
                        />
                        {errors.salon && touched.salon ? (
                            <Error>{errors.salon}</Error>
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

export default AddMonitorias