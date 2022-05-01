import { types } from "../types/types"
import Swal from 'sweetalert2'
import { collection, addDoc, getDocs, doc, query, where, updateDoc, deleteDoc } from "firebase/firestore";
import { dataBase } from "../../Firebase/firebaseConfig";

export const addMonitoriaSinc = data => {
    return {
        type: types.addMonitorias,
        payload: data
    }
}

export const addMonitoriaAsync = data => {
    return (dispatch) => {
        addDoc(collection(dataBase, 'monitorias'), data)
            .then(resp => {
                console.log(resp)
                dispatch(addMonitoriaSinc(data))
                Swal.fire({
                    width: 400,
                    icon: 'success',
                    padding: '2em',
                    showConfirmButton: false,
                    timer: 1500
                })
            })
            .catch(error => {
                console.log(error)
            })
    }
}

export const listMonitoriasSinc = (data) => {
    return {
        type: types.listMonitorias,
        payload: data
    }
}

export const listMonitoriasAsync = () => {
    return async (dispatch) => {
        const getCollection = await getDocs(collection(dataBase, 'monitorias'));
        const monitorias = [];

        getCollection.forEach((doc) => {
            monitorias.push({
                ...doc.data()
            })
        })

        dispatch(listMonitoriasSinc(monitorias))

    }
}

export const editMonitoriaSinc = (data) => {
    return {
        type: types.editMonitorias,
        payload: data
    }
}

export const editMonitoriaAsync = (codigo, data) => {
    return async (dispatch) => {
        const getCollection = collection(dataBase, 'monitorias');
        const q = query(getCollection, where('codigo', '==', codigo))
        const getDataQ = await getDocs(q)
        let id
        getDataQ.forEach(async (document) => {
            id = document.id
        })
        const documentRef = doc(dataBase, 'monitorias', id)
        await updateDoc(documentRef, data)
            .then(resp => {
                dispatch(editMonitoriaSinc(data))
                Swal.fire({
                    width: 400,
                    icon: 'success',
                    padding: '2em',
                    showConfirmButton: false,
                    timer: 1500
                })
                dispatch(listMonitoriasAsync())
            })
            .catch(error => console.log(error))
    }
}

export const deleteMonitoriaSinc = (codigo) => {
    return {
        type: types.deleteMonitorias,
        payload: codigo
    }
}

export const deleteMonitoriaAsync = (codigo) => {
    console.log(codigo)
    return async (dispatch) => {
        const getCollection = collection(dataBase, 'monitorias')
        const q = query(getCollection, where('codigo', '==', codigo))
        const getDataQ = await getDocs(q)
        getDataQ.forEach((d => {
            deleteDoc(doc(dataBase, 'monitorias', d.id)) //El doc es cada campo dentro de la coleccion, cada monitor
        }))
        dispatch(deleteMonitoriaSinc(codigo))
        Swal.fire('Eliminado', '', 'success')
        dispatch(listMonitoriasAsync())
    }
}

export const filterActionAsync = (search) => {
    return async (dispatch) => {
        if (search === '') {
            dispatch(listMonitoriasAsync())
        } else {
            const getCollection = collection(dataBase, 'monitorias');
            const q = query(getCollection, where('monitor', '==', search))
            const getDataQ = await getDocs(q)
            const filtered = []
            getDataQ.forEach(d => {
                const { codigo, date, materia, monitor, salon } = d._document.data.value.mapValue.fields

                const data = {
                    codigo: codigo.stringValue,
                    date: date.stringValue,
                    materia: materia.stringValue,
                    monitor: monitor.stringValue,
                    salon: salon.stringValue
                }



                filtered.push(data)
            })

            console.log(filtered)
            dispatch(filterActionSinc(search))
            dispatch(listMonitoriasSinc(filtered))
        }
    }
}

export const filterActionSinc = (search) => {
    return {
        type: types.filterName,
        payload: search
    }
}