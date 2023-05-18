import M from '@materializecss/materialize/dist/js/materialize.min';
import React, {useState } from "react";
import useAuthContext from '../../hooks/useAuthContext';
import { MY_AUTH_ID, MY_AUTH_USER, MY_AUTH_PASS, MY_AUTH_ROL, MY_AUTH_FECHA, MY_AUTH_EMAIL, MY_AUTH_NAME, MY_AUTH_LAST_NAME } from '../../config/context/Paths';


function Login(props){

    const [user, setUser] = useState('');
    const [pass, setPass] = useState('');
    const [option, setOption] = useState('0');

    const { loginAdministrador, loginUsuarioRegular} = useAuthContext();

    function handleInputChange1(e){
        setUser(e.target.value);
    }
    function handleInputChange2(e){
        setPass(e.target.value);
    }
    function handleInputChange3(e){
        setOption(e.target.value);
    }


    async function login(e){
        e.preventDefault();
        try {

            if (option === '1') {

                window.localStorage.setItem(MY_AUTH_USER,       user);
                window.localStorage.setItem(MY_AUTH_PASS,       pass);
                
                M.toast({
                    html: `Bienvenido, ${user}!`,
                    classes: 'blue darken-1 rounded',
    
                });

                loginAdministrador();

            } else if(option === '2') {
                window.localStorage.setItem(MY_AUTH_USER,       user);
                window.localStorage.setItem(MY_AUTH_PASS,       pass);
                M.toast({
                    html: `Bienvenido, ${user}!`,
                    classes: 'orange darken-1 rounded',
                });
                loginUsuarioRegular();
            } else {

            }

        } catch(e){
            window.localStorage.removeItem(MY_AUTH_USER);
            window.localStorage.removeItem(MY_AUTH_PASS);
            M.toast({
                html: 'Usuario/Contraseña Incorrectos',
                classes: 'red darken-1 rounded',

            });
        }

        setUser('');
        setPass('');

    }

    function close(e){
        e.preventDefault();
        setUser('');
        setPass('');
        M.toast({
            html: 'Close!',
            classes: 'yellow darken-1 black-text rounded',

        });
    }

	return (
        <form className="col s12 container" action="">
            <br />
            {/* <center><strong><span className="card-title black-text"></span></strong></center> */}
            <h3 style={{'fontFamily': 'Courier New', 'color':'black'}} align="left">Iniciar Sesión</h3>
            <div className="row">
                <div className="input-field col s12">
                    <input id="username"
                           type="text"
                           className="validate"
                            autoComplete="off"
                            onChange={handleInputChange1}
                            value={user}
                            />
                    <label htmlFor="username">Username</label>
                </div>
            </div>

            <div className="row">
                <div className="input-field col s12">
                    <input id="password"
                            type="password"
                            className="validate"
                            onChange={handleInputChange2}
                            value={pass}
                            />
                    <label htmlFor="password">Password</label>
                </div>
            </div>

            <div className="row">
           
                <div className="input-field col s6">
                    <select className="browser-default" onChange={handleInputChange3} >
                        <option value="0" disabled selected>Rol</option>
                        <option value="1">Administrador</option>
                        <option value="2">Usuario Regular</option>
                    </select>
                    
                </div>
             
            </div>
            <br />
            <div className="row">
                <div className="input-field col s6">
                    <button className="modal-close blue lighten-2 black-text btn btn-large waves-effect waves-light"
                            type="submit"
                            name="action"
                            onClick={(e) => login(e)}>
                        Iniciar Sesión
                        <i className="material-icons right">send</i>
                    </button>
                </div>
                <div className="input-field col s6">
                    <button className="modal-close red accent-1 black-text btn btn-large waves-effect waves-light"
                            type="submit"
                            name="action"
                            onClick={(e) => close(e)}>Cerrar<i className="material-icons right">close</i>
                    </button>
                </div>
            </div>
            <br />
        </form>
    );
}

export default Login;