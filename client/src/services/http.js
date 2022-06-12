import axios from "axios"

const http = {
    http : axios , 
    get : axios.get ,
    post : axios.post ,
    put : axios.put ,  
    delete : axios.delete
} 

export default http