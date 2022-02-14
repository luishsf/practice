import React from 'react';
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';


export const ProfileButton = () => {
    let history = useHistory()
    return (
        <Button
            style={{ color: 'white' }}
            onClick={() => history.push("/profile")}
        >
            Perfil
        </Button>
    )
}
