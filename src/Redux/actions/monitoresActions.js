import { types } from "../types/types"

export const addMonitorSinc = (data) => {
    return {
        type: types.addMonitores,
        payload: data
    }
}