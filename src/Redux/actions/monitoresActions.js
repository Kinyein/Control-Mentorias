import { types } from "../types/types"
import Swal from 'sweetalert2'
import { collection, addDoc, getDocs, doc, query, where, updateDoc, deleteDoc } from "firebase/firestore";
import { dataBase } from "../../Firebase/firebaseConfig";

export const addMonitorSinc = data => {
    return {
        type: types.addMonitores,
        payload: data
    }
}

export const addMonitorAsync = data => {
    return (dispatch) => {
        addDoc(collection(dataBase, 'monitores'), data)
            .then(resp => {
                console.log(resp)
                dispatch(addMonitorSinc(data))
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

export const listMonitoresSinc = (data) => {
    return {
        type: types.listMonitores,
        payload: data
    }
}

export const listMonitoresAsync = () => {
    return async (dispatch) => {
        const getCollection = await getDocs(collection(dataBase, 'monitores'));
        const monitores = [];

        getCollection.forEach((doc) => {
            monitores.push({
                ...doc.data()
            })
        })

        dispatch(listMonitoresSinc(monitores))

    }
}

export const editMonitorSinc = (data) => {
    return {
        type: types.editMonitores,
        payload: data
    }
}

export const editMonitorAsync = (codigo, data) => {
    return async (dispatch) => {
        const getCollection = collection(dataBase, 'monitores');
        const q = query(getCollection, where('cedula', '==', codigo))
        const getDataQ = await getDocs(q)
        let id
        getDataQ.forEach(async (document) => {
            id = document.id
        })

        const documentRef = doc(dataBase, 'monitores', id)
        await updateDoc(documentRef, data)
            .then(resp => {
                dispatch(editMonitorSinc(data))
                Swal.fire({
                    width: 400,
                    icon: 'success',
                    padding: '2em',
                    showConfirmButton: false,
                    timer: 1500
                })
                dispatch(listMonitoresAsync())
            })
            .catch(error => console.log(error))
    }
}

export const deleteMonitorSinc = (codigo) => {
    return {
        type: types.deleteMonitores,
        payload: codigo
    }
}

export const deleteMonitorAsync = (codigo) => {
    console.log(codigo)
    return async (dispatch) => {
        const getCollection = collection(dataBase, 'monitores')
        const q = query(getCollection, where('cedula', '==', codigo))
        const getDataQ = await getDocs(q)
        getDataQ.forEach((d => {
            deleteDoc(doc(dataBase, 'monitores', d.id)) //El doc es cada campo dentro de la coleccion, cada monitor
        }))
        dispatch(deleteMonitorSinc(codigo))
        Swal.fire('Eliminado', '', 'success')
        dispatch(listMonitoresAsync())
    }
}