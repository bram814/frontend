/* Materializecss */
import '@materializecss/materialize/dist/css/materialize.css';
import '@materializecss/materialize/dist/js/materialize';
/* Import */
import React, {useState} from "react";
import {Route, Routes} from "react-router-dom";
/* ROUTES */
import { HOME, DASHBOARD, ADMINISTRADOR, USUARIO } from './config/routes/Paths';
import PublicRoute from './routes/PublicRoute';
import AdministradorRoute from './routes/AdministradorRoute';
import UsuarioRegularRoute from './routes/UsuarioRegularRoute';
/* Component */
import Breadcrumbs from "./component/Breadcrumbs";
import Navbar from './component/widgets/Navbar';
import Footer from './component/widgets/Footer';
/* PAGES */
import Welcome from './pages/Welcome';
import Dashboard from './pages/dashboard/Dashboard';
import Administrador from './pages/administrador/Administrador';
import Usuario from './pages/usuario/Usuario';

function App() {

  const [breadcrumbs, setBreadcrumbs] = useState([]);
  return (
    <div className="App">
      <Navbar />
      <main>
        <Breadcrumbs breadcrumbs={breadcrumbs} />
        <Routes>

          <Route path={HOME}      element={<PublicRoute />} >
            <Route  index         element={<Welcome setBreadcrumbs={setBreadcrumbs} /> } />
          </Route>

          <Route path={DASHBOARD} element={<PublicRoute />} >
            <Route index          element={<Dashboard setBreadcrumbs={setBreadcrumbs} />} />
          </Route>
          
          <Route path={ADMINISTRADOR} element={<AdministradorRoute />} >
            <Route index          element={<Administrador setBreadcrumbs={setBreadcrumbs} />} />
          </Route>
          
          <Route path={USUARIO} element={<UsuarioRegularRoute />} >
            <Route index          element={<Usuario setBreadcrumbs={setBreadcrumbs} />} />
          </Route>

        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
