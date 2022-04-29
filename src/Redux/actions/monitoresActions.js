import { types } from "../types/types"
import { collection, addDoc } from "firebase/firestore";
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
            })
            .catch(error => {
                console.log(error)
            })
    }
}