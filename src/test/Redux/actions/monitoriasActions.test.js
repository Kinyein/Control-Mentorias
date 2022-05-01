import { filterActionSinc } from "../../../Redux/actions/monitoriasActions";
import { types } from "../../../Redux/types/types";

describe('Pruebas a monitoriasActions', () => {
    test('Filtrar monitoria por nombre monitor', () => {
        const search = 'monitor1';

        expect(filterActionSinc(search)).toEqual({
            type: types.filterName,
            payload: 'monitor1'
        })
    })
})