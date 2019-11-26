export function addHeaders(data) {
    return {
        type: 'ADD_HEADERS',
        data,
    }
}
export function deleteHeaders() {
    return {
        type: 'DELETE_HEADERS'
    }
}
export function addData(data) {
    return {
        type: 'ADD_DATA',
        data,
    }
}
export function selectEmp(data) {
    return {
        type: 'SELECT_EMP',
        data,
    }
}
