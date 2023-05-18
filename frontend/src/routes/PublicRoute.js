import { Navigate, Outlet } from 'react-router-dom';
import useAuthContext from '../hooks/useAuthContext';
import { DASHBOARD, ADMINISTRADOR, USUARIO } from '../config/routes/Paths';

const PublicRoute = (props) => {

    const { isAuthenticated, isAuthenticatedAdministrador, isAuthenticatedUsuarioRegular } = useAuthContext();


    if (isAuthenticated && !isAuthenticatedAdministrador && !isAuthenticatedUsuarioRegular) {
        return <Navigate to={DASHBOARD} />

    } else if (!isAuthenticated && isAuthenticatedAdministrador && !isAuthenticatedUsuarioRegular) {
        return <Navigate to={ADMINISTRADOR} />

    } else if (!isAuthenticated && !isAuthenticatedAdministrador && isAuthenticatedUsuarioRegular) {
        return <Navigate to={USUARIO} />
    }

    return (

        <div>
            <Outlet />
        </div>
    );

};


export default PublicRoute;