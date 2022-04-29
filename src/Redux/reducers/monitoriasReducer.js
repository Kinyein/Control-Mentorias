import { types } from "../types/types";

const initState = {
    monitorias: []
}

export const monitorReducer = (state = initState, action) => {
    switch (action.type) {
        case types.addMonitorias:
            return {
                monitorias: [action.payload]
            }
            
        case types.listMonitorias:
            return {
                monitorias: [...action.payload]
            }

        default:
            return state
    }
}