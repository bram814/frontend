import {useEffect} from "react";
import Tabs from "../../component/dashboard/Tabs";
import { HOME, DASHBOARD } from '../../config/routes/Paths';

function Dashboard(props){

    useEffect(() => {
        let initBreadcrumbs = [
            { link: {HOME},          name: "Inicio" },
            { link: {DASHBOARD},     name: "Dashboard" }
        ];
        props.setBreadcrumbs(initBreadcrumbs);
    }, []);

    return (
        <div className="row" align="center">
            <h1>Dashboard</h1>
            <Tabs />
        </div>
    );
}

export default Dashboard;