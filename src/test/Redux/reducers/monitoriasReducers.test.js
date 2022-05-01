import { monitoriasReducer } from "../../../Redux/reducers/monitoriasReducer"
import { types } from "../../../Redux/types/types"

describe('Pruebas a monitoriasReducers', () => {
    test('Filtrar monitoria por nombre monitor', () => {
        const state = {
            monitorias: [
                {
                    monitor: 'monitor1',
                    codigo: '1'
                },
                {
                    monitor: 'monitor2',
                    codigo: '2'
                }
            ]
        }

        const action = {
            type: types.filterName,
            payload: {
                monitor: 'monitor1'
            }
        }

        console.log(monitoriasReducer(state, action))

        expect(monitoriasReducer(state, action)).toEqual({
            monitorias: [{
                monitor: 'monitor1',
                codigo: '1'
            }]
        })
    })
})
