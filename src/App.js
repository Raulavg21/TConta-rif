import React from 'react';
import Home from './Home';
import Nav from './Components/Nav';
import Cuentas from './Cuentas';
import Detalles from './Detalles';
import Proceso from './Proceso';

function App() {
  return (
    <div className="Container">
      <Nav title="ContaRIF" imgtype="large material-icons" img="menu" titletype="left brand-logo"/>
      <Home />
      <Cuentas />
      <Detalles />
      <Proceso />

    </div>
  );
}

export default App;
