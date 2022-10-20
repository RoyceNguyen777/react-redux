function listReducer(state = [], action) {
    switch (action.type) {
        case "GET_LIST":
            return state
        default:
            return state
    }
}
export default listReducer