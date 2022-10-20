export const plusCounter = (data) => {

    return {
        type: "PLUS",
        payload: data
    }
}


export const minusCounter = (payload) => {
    return {
        type: "MINUS",
        payload
    }
}

export const counterAction = {
    
}