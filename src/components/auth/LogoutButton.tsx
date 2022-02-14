import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from '@material-ui/core';

const style = {
    color: 'white'
};

export const LogoutButton = () => {
    const { logout } = useAuth0();
    return (
        <Button
            style={style}
            onClick={() =>
                logout({
                    returnTo: window.location.origin,
                })
            }
        >
            Sair
        </Button>
    )
}
