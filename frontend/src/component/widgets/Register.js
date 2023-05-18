import M from '@materializecss/materialize/dist/js/materialize.min';
import React, { useState, useEffect } from "react";

function Register(props) {

    const [user, setUser] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [last_name, setLast_name] = useState('');
    const [option, setOption] = useState('0');

    function handleInputChange1(e) {
        setUser(e.target.value);
    }
    function handleInputChange2(e) {
        setPass(e.target.value);
    }
    function handleInputChange3(e) {
        setName(e.target.value);
    }
    function handleInputChange4(e) {
        setLast_name(e.target.value);
    }
    function handleInputChange5(e) {
        setEmail(e.target.value);
    }
    function handleInputChange6(e) {
        setOption(e.target.value);
    }


    useEffect(() => {

        var elems = document.querySelectorAll('.datepicker');
        var instances = M.Datepicker.init(elems, {
            "format": "yyyy-mm-dd",
        });

    });

    async function register(e) {
        e.preventDefault();
        try {


        } catch (e) {
            M.toast({
                html: 'Registro Incorrecto',
                classes: 'red darken-1 rounded',

            });
        }

        setUser('');
        setPass('');
        setName('');
        setEmail('');
        setLast_name('');
        document.getElementById("fecha_nacimiento").value = '';

    }

    function close(e) {
        e.preventDefault();
        setUser('');
        setPass('');
        setName('');
        setEmail('');
        setLast_name('');
        document.getElementById("fecha_nacimiento").value = '';
        M.toast({
            html: 'Close!',
            classes: 'yellow darken-1 black-text rounded',

        });
    }

    return (
        <form className="col s12 container" action="">

            <div className="row">
                <h3 style={{ 'fontFamily': 'Courier New', 'color': 'black', 'marginTop': '10px' }} align="left">Registro</h3>
                <div className="input-field col s6">
                    <input id="name"
                        type="text"
                        className="validate"
                        autoComplete="off"
                        onChange={handleInputChange3}
                        value={name}
                    />
                    <label htmlFor="name">Nombre</label>
                </div>

                <div className="input-field col s6">
                    <input id="last_name"
                        type="text"
                        className="validate"
                        autoComplete="off"
                        onChange={handleInputChange4}
                        value={last_name}
                    />
                    <label htmlFor="last_name">Apellido</label>
                </div>

            </div>

            <div className="row">
                <div className="input-field col s6">
                    <input id="username"
                        type="text"
                        className="validate"
                        autoComplete="off"
                        onChange={handleInputChange1}
                        value={user}
                    />
                    <label htmlFor="username">Username</label>
                </div>
                <div className="input-field col s6">
                    <input id="password"
                        type="password"
                        className="validate"
                        onChange={handleInputChange2}
                        value={pass}
                    />
                    <label htmlFor="password">Password</label>
                </div>
            </div>
            <div className="row black-text">
                <div className="input-field col s12">
                    <label>Fecha de Nacimiento</label>
                    <input id="fecha_nacimiento" type="text" className="datepicker " />
                </div>
            </div>
            <div className="row">

                <div className="input-field col s6">
                    <input id="email_inline" type="email" className="validate" onChange={handleInputChange5} value={email} />
                    <label for="email_inline">Email</label>
                    <span className="helper-text" data-error="wrong" data-success="right"></span>
                </div>
                <div className="input-field col s6">
                    <select className="browser-default" onChange={handleInputChange6} >
                        <option value="0" disabled selected>Rol</option>
                        <option value="1">Turista</option>
                        <option value="2">Hoteles</option>
                        <option value="3">Autos</option>
                        <option value="4">Vuelos</option>
                    </select>

                </div>

            </div>
            <br />
            <div className="row">
                <div className="input-field col s6">
                    <button className="modal-close teal accent-2 black-text btn btn-large waves-effect waves-light"
                        type="submit"
                        name="action"
                        onClick={(e) => register(e)}>
                        Registrar
                        <i className="material-icons right">send</i>
                    </button>
                </div>
                <div className="input-field col s6">
                    <button className="modal-close red accent-1 black-text btn btn-large waves-effect waves-light"
                        type="submit"
                        name="action"
                        onClick={(e) => close(e)}>
                        Close
                        <i className="material-icons right">close</i>
                    </button>
                </div>
            </div>
        </form>
    );
}

export default Register;