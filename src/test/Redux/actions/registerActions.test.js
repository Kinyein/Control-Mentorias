import { registerSinc } from "../../../Redux/actions/registerActions";
import { types } from "../../../Redux/types/types";

describe('Pruebas a registerActions', () => {
    test('Registrar usuario', () => {
        const data = {
            name: 'name',
            email: 'email',
            password: 'pass'
        };

        expect(registerSinc(data)).toEqual({
            type: types.register,
            payload: {
                name: 'name',
                email: 'email',
                password: 'pass'
            }
        })
    })
})