import React, {useState,useEffect} from "react"
import { useLocation } from "react-router-dom"

import http from "../../services/http"
import configData from "../../config/configData.json"
import Loader from "../loader/Loader"

export default  function(Component ){
    return function(){
        const location = useLocation()
        const [data , setData] = useState()
        useEffect(() => {
            http.get(configData.apiEndPoint + location.pathname )
                .then(res => setData(res.data))
                .catch(error => console.error(error))
        } , [])
        
        if(!data) return <Loader/>
        return <Component data = {data}  />
    }
}

