const initialState = {
    hearders: [],
    data: [],
    selectEmp: {}
}
export const excelReducer = (state = initialState, action) => {
    let newState = Object.assign({}, state);
    switch (action.type) {
        case 'ADD_HEADERS':
            newState.hearders = action.data
            break;
        case 'DELETE_HEADERS':
            newState.hearders = []
            break;
        case 'ADD_DATA':
            newState.data = action.data
            break;
        case 'SELECT_EMP':
            const emp = state.data.filter((value, index) => {
                return value.id === action.data
            });
            newState.selectedemp = emp[0];
            break;
        default:
            return state;
    }
    return newState;
}