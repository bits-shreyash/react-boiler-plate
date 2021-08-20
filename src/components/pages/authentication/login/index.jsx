import React, { useState } from "react"
import LoginTemplate from "../../../templates/authentication/login"
import Header from '../../../organisms/header'
import loginForm from '../../../molecules/authentication/loginForm'
const handleLoginSubmit=()=>{
    
}
const Login = () => {
    <LoginTemplate header={Header}>
        <loginForm></loginForm>
    </LoginTemplate>

}
export default Login