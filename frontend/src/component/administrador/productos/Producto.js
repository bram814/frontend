import M from '@materializecss/materialize/dist/js/materialize.min';
import React, { useState, useEffect } from 'react';
// import { MY_AUTH_ROL } from '../../config/context/Paths';
import '../css/style.css'

export default function Producto() {

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
                <div className="col s12 m4 l4">
                    <form className="col s12 m12 l12" action="">

                        <h3 style={{ 'fontFamily': 'Courier New', 'color': 'black', 'fontSize': '24px', 'fontWeight': 'bold' }} align="center">AGREGAR PRODUCTO</h3>
                        <div className="row">
                            <div className="col s12 m6 l6">
                                <div className="input-field col s12">
                                    <input id="username"
                                        type="text"
                                        className="validate"
                                        autoComplete="off"
                                        onChange={handleInputChange1}
                                        value={dato1}
                                    />
                                    <label htmlFor="username">Nombre</label>
                                </div>
                            </div>
                            <div className="col s12 m6 l6">
                                <div className="input-field col s12">
                                    <input id="username"
                                        type="text"
                                        className="validate"
                                        autoComplete="off"
                                        onChange={handleInputChange1}
                                        value={dato1}
                                    />
                                    <label htmlFor="username">Precio</label>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col s12 m6 l6">
                                <div className="input-field col s12">
                                    <input id="username"
                                        type="text"
                                        className="validate"
                                        autoComplete="off"
                                        onChange={handleInputChange1}
                                        value={dato1}
                                    />
                                    <label htmlFor="username">Artesano</label>
                                </div>
                            </div>
                            <div className="col s12 m6 l6">
                                <div className="input-field col s12">
                                    <input id="username"
                                        type="text"
                                        className="validate"
                                        autoComplete="off"
                                        onChange={handleInputChange1}
                                        value={dato1}
                                    />
                                    <label htmlFor="username">SKU</label>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col s12 m12 l12">
                                <div className="input-field col s12">
                                    <input id="username"
                                        type="text"
                                        className="validate"
                                        autoComplete="off"
                                        onChange={handleInputChange1}
                                        value={dato1}
                                    />
                                    <label htmlFor="username">Imagen</label>
                                </div>
                            </div>
                        </div>

                        <div className="row" align="center">

                            <div className="col s12 m12 l12" >
                                <div className="input-field col s12 m12 l12">
                                    <button className="modal-close green lighten-2 black-text btn btn-large waves-effect waves-light"
                                        type="submit"
                                        name="action"
                                        onClick={(e) => add(e)}>
                                        Agregar
                                        <i className="material-icons right">add</i>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <br />
                    </form>
                </div>
                <div className="col s8 m8 l8">
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
                                                                <div className="collapsible-header ul-vehicle"><i className="material-icons">receipt</i>Productos: </div>
                                                                <div className="collapsible-body">
                                                                    <span>
                                                                        <strong>Id de Producto:</strong> <br /><br />
                                                                        <strong>Nombre:</strong><br />
                                                                        <strong>Stock:</strong><br />
                                                                        <strong>SKU:</strong><br />
                                                                        {/* {i.resenia} */}
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
            </div>


            <br />



        </>
    )
}
