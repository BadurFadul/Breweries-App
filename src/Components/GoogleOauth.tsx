import React from 'react'
import { CredentialResponse, GoogleLogin } from '@react-oauth/google';
import { Container } from '@mui/material';
import jwt_decode from "jwt-decode";

import { GoogleOauthtype } from '../types/GoogleOauthtype';

const GoogleOauth = () => {
    const sucessLogin = (credentialResponse: CredentialResponse) => {
        const {credential} = credentialResponse
        if(credential){
          var decoded = jwt_decode<GoogleOauthtype>(credential)
          console.log(decoded)
           // save user data to localStorage
            localStorage.setItem('user', JSON.stringify(decoded))
        }
        
    }
    const errorLogin = () => {

    }
    
  return (
    <Container>
        <GoogleLogin
            onSuccess={sucessLogin}
            onError={errorLogin}
        />
    </Container>
  )
}

export default GoogleOauth