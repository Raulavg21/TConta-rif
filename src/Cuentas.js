import React, {Component} from 'react';
import Cuenta from './Components/Cuenta';
import Boton from './Components/Boton';


class Cuentas extends Component{

  render(){
    return(
      <div className="container">
        <div className="row">
          <div className="card" id="cuentas">
            <div className="card-content #4caf50 green-text">
              <span className="card-title"><h3>Mis Cuentas</h3></span>
              <br/>
              <div className="row"></div>
              <Cuenta alias="TMaker" img="add"/>
              <Cuenta alias="Fabrica" img="account_box"/>
              <Cuenta alias="Fabrica" img="account_circle"/>
            </div>
            <div className="row">
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Cuentas;
