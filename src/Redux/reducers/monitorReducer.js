import { types } from "../types/types";

const initState = {
    monitores: []
}

export const monitorReducer = (state = initState, action) => {
    switch (action.type) {
        case types.addMonitores:
            return {
                monitores: [action.payload]
            }
        case types.listMonitores:
            return {
                monitores: [...action.payload]
            }
        case types.editMonitores:
            return {
                monitores: [action.payload]
            }
        case types.deleteMonitores:
            return {
                monitores: state.monitores.filter(mo => mo.cedula !== action.payload)
            }

        default:
            return state
    }
}