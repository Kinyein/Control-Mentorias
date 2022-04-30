import { Formik } from 'formik';
import * as yup from 'yup';
import React from 'react'
import uuid from 'react-uuid'
import { useDispatch } from 'react-redux';
import { ContainerForm, Error } from '../styles/styledComp/formsStyle';
import { addMonitoriaAsync, editMonitoriaAsync } from '../Redux/actions/monitoriasActions';

let schema = yup.object().shape({
    materia: yup.string().required('Campo Requerido'),
    monitor: yup.string().required('Campo Requerido'),
    date: yup.date().required('Campo Requerido'),
    salon: yup.string().required('Campo Requerido'),
});

const AddMonitorias = ({ toEdit, data }) => {

    const dispatch = useDispatch()

    return (
        <ContainerForm>
            <h1> {toEdit ? 'Editar' : 'Añadir'} Monitoria</h1>
            <Formik
                initialValues={toEdit ? {
                    materia: data.materia,
                    monitor: data.monitor,
                    date: data.date,
                    salon: data.salon,
                    codigo: data.codigo
                } : {
                    materia: '',
                    monitor: '',
                    date: '',
                    salon: '',
                    codigo: uuid()
                }}
                validationSchema={schema}

                onSubmit={(values) => {
                    toEdit ? dispatch(editMonitoriaAsync(data.codigo, values))
                        : dispatch(addMonitoriaAsync(values))
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
                            name="date"
                            placeholder='YYYY-MM-DD'
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
                            {toEdit ? 'Guardar' : "Agregar"}
                        </button>
                    </form>
                )}
            </Formik>
        </ContainerForm>
    )
}

export default AddMonitorias