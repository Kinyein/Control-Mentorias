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

        default:
            return state
    }
}