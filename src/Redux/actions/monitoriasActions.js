import { types } from "../types/types"
import { collection, addDoc, getDocs, doc } from "firebase/firestore";
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