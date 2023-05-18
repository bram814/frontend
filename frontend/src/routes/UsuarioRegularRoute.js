import { Navigate, Outlet } from 'react-router-dom';
import useAuthContext from '../hooks/useAuthContext';
import { HOME } from '../config/routes/Paths';

const UsuarioRegularRoute = (props) => {
    
    const {isAuthenticatedUsuarioRegular} = useAuthContext();


    if(!isAuthenticatedUsuarioRegular){
        return <Navigate to={HOME} />
    }

    return ( 

        <div>
            <Outlet />
        </div>
    );

};


export default UsuarioRegularRoute;