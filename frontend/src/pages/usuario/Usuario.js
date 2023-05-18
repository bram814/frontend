import {useEffect} from "react";
import Tabs from "../../component/usuario/Tabs";
import { HOME, USUARIO } from '../../config/routes/Paths';

function Usuario(props){

    useEffect(() => {
        let initBreadcrumbs = [
            { link: {HOME},          name: "Inicio" },
            { link: {USUARIO},       name: "Usuario" }
        ];
        props.setBreadcrumbs(initBreadcrumbs);
    }, []);

    return (
        <div className="row" align="center">
            <Tabs />
        </div>
    );
}

export default Usuario;