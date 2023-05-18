import M from '@materializecss/materialize/dist/js/materialize.min';
import React, { useEffect, useState } from 'react';
import Producto from './productos/Producto';
import Pedido from './pedidos/Pedido';

const Tabs = () => {


    useEffect(() => {
        M.AutoInit();
        let tabs = document.querySelectorAll("tabs");
        M.Tabs.init(tabs);
    }, []);

    return (

        <>
            <div className="row">

                <h3 style={{ 'fontFamily': 'Courier New', 'color': 'black', 'fontSize':'32px', 'fontWeight':'bold'}} align="center">ADMINISTRADOR</h3>
                <div className="col s12">
                    <ul className="tabs tabs-fixed-width tab-demo z-depth-1 ">
                        <li className="tab col s3">
                            <a href="#producto"><i className="material-icons">add_shopping_cart</i>Productos</a>
                        </li>

                        <li className="tab col s2">
                            <a href="#pedidos"><i className="material-icons">reorder</i>Pedidos</a>
                        </li>

                    </ul>
                </div>
                <br /><br /><br /><br /><br />
                <div className="row">
                    <div id="producto" className="col s10 m12">
                        <Producto />
                        
                        <br /><br /><br /><br />
                    </div>
                    <div id="pedidos" className="col s10 m12">
                        <Pedido />
                        <br /><br /><br /><br />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Tabs;