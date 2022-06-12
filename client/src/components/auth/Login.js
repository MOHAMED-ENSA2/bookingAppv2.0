import React, {useState} from 'react'
import "./Login.css"

import http from "../../services/http"
import configData from "../../config/configData.json"
import {validateEmail, validatePassword} from "../../utils/validators"

function Login() {
    const [step , setStep] = useState(1) 
    const [email , setEmail] = useState("")
    const [error, setError] = useState("")
    const [authInfos , setAuthInfos]  = useState({})
    // const [emailExists, setEmailExists] = useState()

    const login = () => {
        if(validatePassword(authInfos.password).error){
            setError(validatePassword(authInfos.password).error.details[0].message)
            return
        }
        http.post(configData.apiEndPoint + "/auth/login" , {...authInfos ,  email : email} )
        .then(res => {
            console.log("login successfuly : " , res.data)
            setError(null)
        })
        .catch(error => {
            console.log(error.response.data);
            setError(error.response.data)
        })
    }

    const register = () => {
        if(validatePassword(authInfos.password).error){
            setError(validatePassword(authInfos.password).error.details[0].message)
            return
        }
        http.post(configData.apiEndPoint + "/users/register" , {...authInfos ,  email : email} )
        .then(res => {
            console.log("registered successfuly : " , res.data )
            setError(null)
        })
        .catch(error =>  {
            if (error.response) {
                console.log(error.response.data)
                setError(error.response.data)
            }
        })
    }

    const checkEmailExistance = () => {
        if(validateEmail(email).error){
            setError(validateEmail(email).error.details[0].message)
            return
        }
        http.post(configData.apiEndPoint + "/auth/emailExists" , { email : email} )
        .then(res => {
            setError(null)
            if(res.data === true)   setStep(2) 
            else    setStep(3)                         
        })
        .catch(error => {
            setError(error.response.data);
        })    
    }

    return (
        <div className='login'>
            {   step === 1 &&        
                <div className='login--step'>
                    <div className='step--title'>
                        Se connecter ou créer un compte
                    </div>
                    <div className='step--input'>
                        <div className='login--label'>
                            Adresse e-mail
                        </div>
                        <input
                         className= {error ? "errorOutline" : ""}
                         type="email" name="" id="" 
                         onChange={(e) => setEmail(e.target.value)}
                         />
                         {  error && 
                            <div className='errorMessage'>
                                {error}
                            </div>
                         }
                    </div>
                    <button 
                        className='btn btn_sample'
                        onClick={() => checkEmailExistance()}
                    >
                            Continue avec une adresse e-mail.
                    </button>
                    <div className='login--canditions'>
                    En créant ou en vous connectant à un compte,
                    vous acceptez nos<span className='btn-color'> conditions générales</span> et notre
                    <span className='btn-color'> charte de confidentialité</span>.
                </div>
                </div>
            }
           { step === 2 &&
            <div className='login--step'>
                <div className='step--title'>
                    Entrez le mot de passe
                </div>
                <div className='step--input'>
                    <div className='login--label'>
                        Mot de passe
                    </div>
                    <input
                        className= {error ? "errorOutline" : ""}
                        type="password" name="" id="" 
                        onChange={(e) => setAuthInfos({...authInfos , password : e.target.value}) }   
                    />
                    {  error && 
                        <div className='errorMessage'>
                            {error}
                        </div>
                    }
                </div>                
                <button 
                    className='btn btn_sample'
                    onClick={login}
                >
                        Se connecter
                </button>
                <div className='login--canditions'>
                    En créant ou en vous connectant à un compte,
                    vous acceptez nos<span className='btn-color'> conditions générales</span> et notre
                    <span className='btn-color'> charte de confidentialité</span>.
                </div>
            </div>}

            { step === 3 &&
            <div className='login--step'>
                <div className='step--title'>
                    Créer un mot de passe
                </div>
                <div className='step--input'>
                    <div className='login--label'>
                        Nom et Prénom
                    </div>
                    <input 
                        type="text" name="" id=""
                        onChange={(e) => setAuthInfos({...authInfos , name : e.target.value}) }       
                    />
                   
                </div>
                <div className='step--input'>
                    <div className='login--label'>
                        Mot de passe
                    </div>
                    <input 
                        className= {error ? "errorOutline" : ""}
                        type="password" name="" id="" 
                        onChange={(e) => setAuthInfos({...authInfos , password : e.target.value}) }   
                    />
                    {  error && <div className='errorMessage'>{error}</div>}
                </div>
                <div className='step--input'>
                    <div className='login--label'>
                        Confirmer le mot de passe
                    </div>
                    <input 
                        className= {error ? "errorOutline" : ""}
                        type="password" name="" id="" 
                    />
                   
                </div>
                <button 
                    className='btn btn_sample'
                    onClick={register}
                >
                        Créer un compte
                </button>
                <div className='login--canditions'>
                    En créant ou en vous connectant à un compte,
                    vous acceptez nos<span className='btn-color'> conditions générales</span> et notre
                    <span className='btn-color'> charte de confidentialité</span>.
                </div>
            </div>}
        </div>
    )
}

export default Login