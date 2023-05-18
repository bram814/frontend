import M from '@materializecss/materialize/dist/js/materialize.min';
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useAuthContext from '../../hooks/useAuthContext';
import { HOME, DASHBOARD, ADMINISTRADOR, USUARIO } from '../../config/routes/Paths';
import Modal from "./Modal";

function Navbar(props) {

    var menu, menuSide;

    const {
        isAuthenticatedAdministrador, isAuthenticatedUsuarioRegular,
        logoutAdministrador, logoutUsuarioRegular
    } = useAuthContext();

    const [instance, setInstance] = useState(null);
    const [typeForm, setTypeForm] = useState("");

    useEffect(() => {
        M.AutoInit();
        let sideNav = document.querySelector('.sidenav');
        let instanceSideNav = M.Sidenav.init(sideNav);
        setInstance(instanceSideNav);



    }, []);

    function closeSideNavbar() {
        instance.close();
    }

    function LOGOUT_ADMINISTRADOR(e) {
        e.preventDefault();
        logoutAdministrador();
    }

    function LOGOUT_USUARIO(e) {
        e.preventDefault();
        logoutUsuarioRegular();
    }

    if (!isAuthenticatedAdministrador && !isAuthenticatedUsuarioRegular) {

        menu = (
            <>
                <div className="">
                    <ul className="left hide-on-med-and-down">

                        <li>
                            <a className="waves-effect waves-light btn modal-trigger green accent-3 black-text" href="#modal1"
                                onClick={() => setTypeForm("login")}>Login<i className="material-icons right">person</i>
                            </a>
                        </li>

                        <li>
                            <a className="blue darken-1 waves-effect waves-light btn modal-trigger black-text" href="#modal1"
                                onClick={() => setTypeForm("register")}>Registro<i className="material-icons right">person_add</i>
                            </a>
                        </li>
                    </ul>
                    <Modal typeForm={typeForm} />
                </div>
            </>
        )

        menuSide = (
            <>
                <div class="col l12 m12 s12">
                    <ul className="left hide-on-med-and-down">
                        <li><Link to={HOME} className="waves-effect waves-light btn orange accent-2 black-text">
                            <i className="material-icons center">home</i>
                        </Link></li>
                    </ul>
                    <ul className="right hide-on-med-and-down">
                        <li>
                            <a className="waves-effect waves-light btn modal-trigger green accent-3 black-text" href="#modal1"
                                onClick={() => setTypeForm("login")}>Login<i className="material-icons right">person</i>
                            </a>
                        </li>

                        <li>
                            <a className="blue darken-1 waves-effect waves-light btn modal-trigger black-text" href="#modal1"
                                onClick={() => setTypeForm("register")}>Registro<i className="material-icons right">person_add</i>
                            </a>
                        </li>
                    </ul>
                    <Modal typeForm={typeForm} />
                </div>
            </>
        )

    } else if (isAuthenticatedAdministrador && !isAuthenticatedUsuarioRegular) {
        menu = (
            <>
                <div>
                    <ul className="left hide-on-med-and-down">
                        <li><Link to={ADMINISTRADOR} className="waves-effect waves-light btn green accent-2 black-text">
                            Administrador
                            <i className="material-icons left">dashboard</i>
                        </Link></li>
                    </ul>

                    <ul className="right hide-on-med-and-down">
                        <li><a className="waves-effect waves-light btn red accent-2 black-text" href="/#"
                            onClick={LOGOUT_ADMINISTRADOR}>
                            Sign Out
                            <i className="material-icons right">exit_to_app</i>
                        </a></li>
                    </ul>
                </div>
            </>
        )

        menuSide = (
            <>
                <div>
                    <ul className="left hide-on-med-and-down">
                        <li><Link to={ADMINISTRADOR} className="waves-effect waves-light btn green accent-2 black-text">
                            Administrador
                            <i className="material-icons left">dashboard</i>
                        </Link></li>
                    </ul>

                    <ul className="right hide-on-med-and-down">
                        <li><a className="waves-effect waves-light btn red accent-2 black-text" href="/#"
                            onClick={LOGOUT_ADMINISTRADOR}>
                            Sign Out
                            <i className="material-icons right">exit_to_app</i>
                        </a></li>
                    </ul>
                </div>
            </>
        )

    } else if (!isAuthenticatedAdministrador && isAuthenticatedUsuarioRegular) {
        menu = (
            <>
                <div>
                    <ul className="left hide-on-med-and-down">
                        <li><Link to={USUARIO} className="waves-effect waves-light btn green accent-2 black-text">
                            Usuario
                            <i className="material-icons left">dashboard</i>
                        </Link></li>
                    </ul>

                    <ul className="right hide-on-med-and-down">
                        <li><a className="waves-effect waves-light btn red accent-2 black-text" href="/#"
                            onClick={LOGOUT_USUARIO}>
                            Sign Out
                            <i className="material-icons right">exit_to_app</i>
                        </a></li>
                    </ul>
                </div>
            </>
        )

        menuSide = (
            <>
                <div>
                    <ul className="left hide-on-med-and-down">
                        <li><Link to={USUARIO} className="waves-effect waves-light btn green accent-2 black-text">
                            Usuario
                            <i className="material-icons left">dashboard</i>
                        </Link></li>
                    </ul>

                    <ul className="right hide-on-med-and-down">
                        <li><a className="waves-effect waves-light btn red accent-2 black-text" href="/#"
                            onClick={LOGOUT_USUARIO}>
                            Sign Out
                            <i className="material-icons right">exit_to_app</i>
                        </a></li>
                    </ul>
                </div>
            </>
        )
    }

    return (
        <div>
            <nav>
                <div className="nav-wrapper blue lighten-2 ">
                    <a href="/" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                    {menu}
                </div>
            </nav>
            <ul className="sidenav" id="mobile-demo">
                <li>
                    <Link to="/" className="brand-logo"
                        onClick={() => closeSideNavbar(instance)}
                    >
                        Prueba<strong> Ténica</strong>
                    </Link>
                </li>
                {menuSide}
            </ul>
        </div>
    );
}

export default Navbar;