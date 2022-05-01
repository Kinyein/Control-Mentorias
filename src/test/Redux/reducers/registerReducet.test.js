import { registerReducer } from "../../../Redux/reducers/registerReducer"
import { types } from "../../../Redux/types/types"

describe('Pruebas a registerReducer', () => {
    test('Registrar usuario', () => {
        const state = {}

        const action = {
            type: types.register,
            payload: {
                name: 'name',
                email: 'email',
                password: 'pass'
            }
        }

        expect(registerReducer(state, action)).toEqual({
            name: 'name',
            email: 'email',
            password: 'pass'
        })
    })

    test('Return state', () => {
        const state = {}

        const action = {
            type: types.registrar,
            payload: {
                name: 'name',
                email: 'email',
                password: 'pass'
            }
        }

        expect(registerReducer(state, action)).toEqual({})
    })
})
