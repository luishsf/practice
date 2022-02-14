import { useAuth0 } from "@auth0/auth0-react";
import { LoginButton} from './LoginButton';
import { LogoutButton } from './LogoutButton';
import React from 'react';

export const NavAuth = () => {
    const { isAuthenticated } = useAuth0();

    if (isAuthenticated) {
        return (
            <div className="nav-auth">
                <LogoutButton/>
            </div>
        )
    } else {
        return (
            <div className="nav-auth">
                <LoginButton/>
            </div>
        )
    }
}