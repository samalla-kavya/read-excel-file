const initialState = {
    hearders: [],
    data: []
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
        default:
            return state;
    }
    return newState;
}
