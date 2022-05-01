import { loginSinc, logoutSinc } from "../../../Redux/actions/loginActions";
import { types } from "../../../Redux/types/types";

describe('Pruebas a loginActions', () => {
    test('Inicio de sesion', () => {
        const obj = {
            email: 'email',
            password: 'pass'
        }
        
        expect(loginSinc(obj)).toEqual({
            type: types.login,
            payload: {
                email: 'email',
                password: 'pass'
            }
        })
    })

    test('Logout', () => {
        expect(logoutSinc()).toEqual({
            type: types.logout
        })
    })
})