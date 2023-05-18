import { createContext, useCallback, useMemo, useState } from "react";
import { MY_AUTH_APP, MY_AUTH_ADMINISTRADOR, MY_AUTH_USUARIO_REGULAR } from '../config/context/Paths';
import PropTypes from 'prop-types';

export const AuthContext = createContext();


export default function AuthContextProvider({ children }){

    const [isAuthenticated,        setIsAuthenticated]        = useState(window.localStorage.getItem(MY_AUTH_APP)     ?? false);
    const [isAuthenticatedAdministrador, setIsAuthenticatedAdministrador] = useState(window.localStorage.getItem(MY_AUTH_ADMINISTRADOR) ?? false);
    const [isAuthenticatedUsuarioRegular,  setIsAuthenticatedUsuarioRegular]  = useState(window.localStorage.getItem(MY_AUTH_USUARIO_REGULAR)  ?? false);
    

    const login = useCallback(() => {
        window.localStorage.setItem(MY_AUTH_APP, true);
        setIsAuthenticated(true);

    }, []);

    const logout = useCallback(() => {
        window.localStorage.removeItem(MY_AUTH_APP);
        setIsAuthenticated(false)
    }, []);


    /** ====================== LOGIN ----> ADMINISTRADOR ====================== ***/
    const loginAdministrador = useCallback(() => {
        window.localStorage.setItem(MY_AUTH_ADMINISTRADOR, true);
        setIsAuthenticatedAdministrador(true);

    }, []);

    /** ====================== LOGOUT ----> ADMINISTRADOR ====================== ***/
    const logoutAdministrador = useCallback(() => {
        window.localStorage.removeItem(MY_AUTH_ADMINISTRADOR);
        setIsAuthenticatedAdministrador(false)
    }, []);


    /** ====================== LOGIN ----> USUARIO REGULAR ====================== ***/
    const loginUsuarioRegular = useCallback(() => {
        window.localStorage.setItem(MY_AUTH_USUARIO_REGULAR, true);
        setIsAuthenticatedUsuarioRegular(true);

    }, []);

    /** ====================== LOGOUT ----> USUARIO REGULAR ====================== ***/
    const logoutUsuarioRegular = useCallback(() => {
        window.localStorage.removeItem(MY_AUTH_USUARIO_REGULAR);
        setIsAuthenticatedUsuarioRegular(false)
    }, []);



    const value = useMemo(() => ({
        loginAdministrador,
        logoutAdministrador,
        isAuthenticatedAdministrador,
        loginUsuarioRegular,
        logoutUsuarioRegular,
        isAuthenticatedUsuarioRegular,
        login,
        logout,
        isAuthenticated

    }), 
    [
        isAuthenticatedAdministrador,
        loginAdministrador, 
        logoutAdministrador,
        isAuthenticatedUsuarioRegular,
        loginUsuarioRegular,
        logoutUsuarioRegular,
        isAuthenticated,
        login,
        logout,
        
    ]);
    
    return(

        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
}

AuthContextProvider.propTypes = {
    children:PropTypes.object,
}