import React from 'react';
import { Button } from '@material-ui/core';
import { useAuth0 } from "@auth0/auth0-react";
import { FiUserCheck } from 'react-icons/fi';


export const LoginButton = () => {
    const { loginWithRedirect } = useAuth0();
    return (
        <Button
            variant="outlined"
            color="secondary"
            startIcon={<FiUserCheck />}
            style={{  marginRight: 20,  fontWeight: 'bold', border: '2px solid' }}
            onClick={() => loginWithRedirect()}
        >
          Login
        </Button>
    )
}
