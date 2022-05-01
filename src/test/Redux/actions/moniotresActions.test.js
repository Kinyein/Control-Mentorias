import { addMonitorSinc, deleteMonitorSinc, editMonitorSinc, listMonitoresSinc } from "../../../Redux/actions/monitoresActions";
import { types } from "../../../Redux/types/types";

describe('Pruebas a monitoresActions', () => {
    test('Agregar Monitor', () => {
        const monitor = 'dataMonitor';

        expect(addMonitorSinc(monitor)).toEqual({
            type: types.addMonitores,
            payload: 'dataMonitor'
        })
    })

    test('Editar Monitor', () => {
        const monitor = 'editMonitor'

        expect(editMonitorSinc(monitor)).toEqual({
            type: types.editMonitores,
            payload: 'editMonitor'
        })
    })

    test('Eliminar Monitor', () => {
        const codigo = '123';

        expect(deleteMonitorSinc(codigo)).toEqual({
            type: types.deleteMonitores,
            payload: '123'
        })
    })

    test('Listar monitores', () => {
        const list = 'listmonitor';

        expect(listMonitoresSinc(list)).toEqual({
            type: types.listMonitores,
            payload: 'listmonitor'
        })
    })
})