import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

export const Profile = () => {
    
    const { user, isLoading, isAuthenticated, logout } = useAuth0();

    if (isLoading) {
        return (<h1>Loading...</h1>);
    }

    let message = isAuthenticated ? "Autenticado" : "Não Autenticado";
    return (
        <div>
            <h1>{message}</h1>

            <nav>
                
                <button
                    onClick={() =>
                        logout({
                            returnTo: window.location.origin,
                        })
                    }
                >
                    Logout
                </button>
                
            </nav>
            <div>
                <div className="row">
                    <p>Token:</p>
                    <pre className="col-12 text-light bg-dark p-4">
                        {JSON.stringify(user, null, 2)}
                    </pre>
                </div>
            </div>
        </div>
    )
}