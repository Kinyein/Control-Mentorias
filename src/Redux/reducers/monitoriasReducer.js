import { types } from "../types/types";

const initState = {
    monitorias: []
}

export const monitoriasReducer = (state = initState, action) => {
    switch (action.type) {
        case types.addMonitorias:
            return {
                monitorias: [action.payload]
            }
        case types.listMonitorias:
            return {
                monitorias: [...action.payload]
            }
        case types.editMonitorias:
            return {
                monitorias: [action.payload]
            }
        case types.deleteMonitores:
            return {
                monitorias: state.monitorias.filter(mo => mo.codigo !== action.payload)
            }

        default:
            return state
    }
}