import M from '@materializecss/materialize/dist/js/materialize.min';
import React, { useState, useEffect } from 'react';
// import { MY_AUTH_ROL } from '../../config/context/Paths';
import '../css/style.css'

export default function Pedido() {

    const [data, setData] = useState([1, 2, 3, 4, 5, 6]);
    // const [rol,   setRol]   = useState(window.localStorage.getItem(MY_AUTH_ROL));

    const [loading, setLoading] = useState(true);




    const [dato1, setDato1] = useState('');


    function handleInputChange1(e) {
        setDato1(e.target.value);
    }


    useEffect(() => {

        (async () => {
            try {


            } catch (e) {
                console.log(e);
                M.toast({
                    html: `Error en Reseñas!`,
                    classes: 'red darken-1 rounded',

                });
            }
        })();


        M.AutoInit();
        var elem = document.querySelector('.collapsible.expandable');
        var instance = M.Collapsible.init(elem, {
            accordion: true
        });


    }, []);


    async function add(e) {

    }
    return (
        <>
            <div className="row">

                <div className='row'>
                    {

                        (loading) ? (
                            <>
                                {
                                    data.map(i => {
                                        return (
                                            <>
                                                <div className="col s4 m4 l4">
                                                    <ul className="collapsible popout ">
                                                        <li>
                                                            <div className="collapsible-header ul-vehicle"><i className="material-icons">receipt</i>Pedido: </div>
                                                            <div className="collapsible-body">
                                                                <span>
                                                                    <strong>No. Pedido:</strong> <br /><br />
                                                                    <strong>Usuario del Solicitante:</strong><br />
                                                                    <strong>Nombre del Pedido:</strong><br />
                                                                    <strong>Descripción del Pedido:</strong><br />
                                                                    {/* {i.resenia} */}

                                                                    <a class="btn-floating btn-large waves-effect waves-light green"><i class="material-icons">add</i></a>
                                                                    <a class="btn-floating btn-large waves-effect waves-light red"><i class="material-icons">delete</i></a>
        
                                                                </span></div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </>
                                        )
                                    })
                                }

                            </>
                        ) : (<><br /></>)
                    }
                </div>
            </div>
            <br />
        </>
    )
}
