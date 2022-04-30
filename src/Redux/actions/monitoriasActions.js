import { types } from "../types/types"
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
        dispatch(listMonitoriasAsync())
    }
}