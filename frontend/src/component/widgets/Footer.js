
function Footer(props) {

    return (
        <footer style={{ position: "fixed", bottom: "0", left: "0", width: "100%" }}
                className="page-footer blue lighten-2">
            <div className="footer-copyright blue lighten-2">
                <div className="container black-text">
                    
                    <a className="left black-text" href=""> © 2023 Prueba Técnica</a>
                    <a className="right black-text" href="https://github.com/Dogfalo/materialize/blob/master/LICENSE"> MIT License</a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;