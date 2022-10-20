const initState = 1

function counterReducer(state = initState, action) {
    // action  = {type: ,payload: }
    switch (action.type) {
        case "PLUS":
            // xữ lý data ở đây
            return state + 1
        case "MINUS":
            // xữ lý data ở đây
            return state - 1
        default:
            return state
    }
}

export default counterReducer