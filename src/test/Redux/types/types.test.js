import { types } from "../../../Redux/types/types"

describe('Pruebas a types', () => {
    test('types correctos', () => {
        expect(types).toEqual({
            login: 'Login',
            logout: 'Logout',
            register: 'Register',

            listMonitores: 'List Monitores',
            addMonitores: 'Add Monitores',
            editMonitores: 'Edit Monitores',
            deleteMonitores: 'Delete Monitores',

            listMonitorias: 'List Monitorias',
            addMonitorias: 'Add Monitorias',
            editMonitorias: 'Edit Monitorias',
            deleteMonitorias: 'Delete Monitorias',

            filterName: 'Filter Name',
            filterlastName: 'Filter lastName',
            filterAcademicProgram: 'Filter Academic Program',
            filterSemester: 'Filter Semester',
            filterIdentification: 'Filter Id (C.C.)'
        })
    })
})