import M from '@materializecss/materialize/dist/js/materialize.min';
import React, { useEffect, useState } from 'react';

import { MY_AUTH_APP, MY_AUTH_USER, MY_AUTH_PASS } from '../../config/context/Paths';
const Tabs = () => {



    const [user, setUser] = useState(window.localStorage.getItem(MY_AUTH_USER));
    const [pass, setPass] = useState(window.localStorage.getItem(MY_AUTH_PASS));


    useEffect(() => {
        M.AutoInit();
        let tabs = document.querySelectorAll("tabs");
        M.Tabs.init(tabs);
    }, []);

    return (

        <>
            <div className="row">
                <h3 style={{ 'fontFamily': 'Courier New' }} align="left">Usuario</h3>
                <div className="col s12">
                    <ul className="tabs tabs-fixed-width tab-demo z-depth-1 ">

                        <li className="tab col s2">
                            <a href="#datosPersonales"><i className="material-icons">perm_identity</i>Datos Personales</a>
                        </li>
                        <li className="tab col s3">
                            <a href="#realizarPedidos"><i className="material-icons">playlist_add_check</i>Realizar Pedidos</a>
                        </li>


                    </ul>
                </div>
                <br /><br /><br /><br /><br />
                <div className="row">
                    <div id="datosPersonales" className="col s10 m12">
                        
                    <h3 style={{ 'fontFamily': 'Courier New', 'color': 'black', 'fontSize': '24px', 'fontWeight': 'bold' }} align="center">DATOS PERSONALES</h3>

                        <div id="test0" className="col s10 m12">
                            <div className="row">
                                <table className="table-style-dashboard centered col s6" >
                                    <tbody>
                                        <tr>
                                            <th>Usuario</th>
                                            <td>{user}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <br /><br /><br /><br />
                    </div>
                    <div id="realizarPedidos" className="col s10 m12">
                        REALIZAR PEDIDOS
                        <br /><br /><br /><br />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Tabs;