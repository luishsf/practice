import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from '@material-ui/core';

const style = {
    color: 'white'
};

export const SingupButton = () => {
    const { loginWithRedirect } = useAuth0();
    return (
        <Button
            style={style}
            onClick={() =>
                loginWithRedirect({
                    screen_hint: "signup",
                })
            }
        >
            Cadastrar
        </Button>
    )
}