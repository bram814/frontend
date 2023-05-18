import {useEffect} from "react";
import Tabs from "../../component/administrador/Tabs";
import { HOME, ADMINISTRADOR } from '../../config/routes/Paths';

function Administrador(props){

    useEffect(() => {
        let initBreadcrumbs = [
            { link: {HOME},          name: "Inicio" },
            { link: {ADMINISTRADOR}, name: "Administrador" }
        ];
        props.setBreadcrumbs(initBreadcrumbs);
    }, []);

    return (
        <div className="row" align="center">
            <Tabs />
        </div>
    );
}

export default Administrador;