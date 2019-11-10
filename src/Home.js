import React, {Component} from 'react';
import Boton from './Components/Boton';

class Home extends Component{

  render(){
    return(
      <div className="container">
      <div className="row" id="home">
            <div className="card">
              <div className="card-content #4caf50 green-text">
                <span className="card-title"><h3>Bienvenido</h3></span>
                <br/>
                <i className="right large material-icons">tag_faces</i>
                <p>Conta RIF es la Aplicacion que ayuda a los contadores
                a disminuir su carga de trabajo, mediante el calculo de impuestos
                para las empresas bajo el regimen de incorporacion fiscal (RIF)
                </p>
              </div>
              <div class="card-action">
                <Boton
                name="Comenzar"
                img="arrow_forward"
                link="#cuentas"
                type="btn waves-effect-large waves-light #4caf50 green"
                />
                <br/>
                <br/>
              </div>
            </div>
          </div>
        </div>
    );
  }
}

export default Home;
