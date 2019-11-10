import React from 'react';
import Home from './Home';
import Nav from './Components/Nav';
import Cuentas from './Cuentas';
import Detalles from './Detalles';
import Proceso from './Proceso';
import Card from './Components/Card';

function App() {
  return (
    <div className="Container">
      <div className="row">
        <Nav
        title="RIF"
        imgtype="large material-icons"
        img="menu"
        titletype="left brand-logo"
        color="#4caf50 green"
        />
        <Card
        title="Bienvenido"
        id="home"
        description="Conta RIF es la Aplicacion que ayuda a los contadores a disminuir su carga de trabajo, mediante el calculo de impuestos para las empresas bajo el regimen de incorporacion fiscal (RIF)"
        />
        <Home />
        <Cuentas />
        <Detalles />
        <Proceso />
      </div>
    </div>
  );
}

export default App;
