import { Navigate, Outlet } from 'react-router-dom';
import useAuthContext from '../hooks/useAuthContext';
import { HOME } from '../config/routes/Paths';

const AdministradorRoute = (props) => {
    
    const {isAuthenticatedAdministrador} = useAuthContext();


    if(!isAuthenticatedAdministrador){
        return <Navigate to={HOME} />
    }

    return ( 

        <div>
            <Outlet />
        </div>
    );

};


export default AdministradorRoute;