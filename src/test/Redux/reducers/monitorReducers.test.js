import { monitorReducer } from "../../../Redux/reducers/monitorReducer"
import { types } from "../../../Redux/types/types"

describe('Pruebas a monitorReducers', () => {
    test('Agregar Monitor', () => {
        const state = {
            monitores: []
        }

        const action = {
            type: types.addMonitores,
            payload: {
                monitor: 'dataMonitor'
            }
        }

        expect(monitorReducer(state, action)).toEqual({
            monitores: [{ monitor: 'dataMonitor' }]
        })
    })

    test('Editar Monitor', () => {
        const state = {
            monitores: []
        }

        const action = {
            type: types.editMonitores,
            payload: {
                monitor: 'dataMonitor'
            }
        }

        expect(monitorReducer(state, action)).toEqual({
            monitores: [{ monitor: 'dataMonitor' }]
        })
    })

    test('Eliminar Monitor', () => {
        const state = {
            monitores: [
                {
                    monitor1: 'monitor1',
                    cedula: '1'
                },
                {
                    monitor2: 'monitor2',
                    cedula: '2'
                }
            ]
        }

        const action = {
            type: types.deleteMonitores,
            payload: '1'
        }

        expect(monitorReducer(state, action)).toEqual({
            monitores: [{
                monitor2: 'monitor2',
                cedula: '2'
            }]
        })
    })
})
