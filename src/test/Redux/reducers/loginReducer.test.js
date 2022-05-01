import { loginReducers } from "../../../Redux/reducers/loginReducers"
import { types } from "../../../Redux/types/types"

describe('pruebas a loginReducers', () => {
    test('Loguearse', () => {
        const state = {}

        const action = {
            type: types.login,
            payload: {
                email: 'email',
                password: 'pass'
            }
        }

        expect(loginReducers(state, action)).toEqual({
            email: 'email',
            password: 'pass'
        })
    })

    test('Desloguerase', () => {
        const state = {}

        const action = {
            type: types.logout,
            payload: {}
        }

        expect(loginReducers(state, action)).toEqual({})
    })
})