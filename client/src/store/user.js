export const SET_API_TARGET = "SET_API_TARGET"

export const setapiTarget = (data) => ({
    type : "SET_API_TARGET" , 
    payload : {
        data   
    }
})


export default function reducer (state = "" , action){
    if(action.type == SET_API_TARGET)
        return action.action.data
    return state 
}