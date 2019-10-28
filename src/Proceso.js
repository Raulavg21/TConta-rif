import React, {Component} from 'react';
import Boton from './Components/Boton';

class Proceso extends Component{

  render(){
    return(
      <div className="container">
      <div className="row" id="proceso">
            <div className="card">
              <div className="card-content #4caf50 green-text">
              <nav>
                <div className="nav-wrapper">
                  <div className="col s12">
                    <a href="#!" className="breadcrumb">Carga</a>
                    <a href="#!" className="breadcrumb">Clasificacion</a>
                    <a href="#!" className="breadcrumb">Resultados</a>
                  </div>
                </div>
              </nav>
                <span className="card-title"><h3>Inserte los XML</h3></span>
                <br/>
                <form action="#">
                  <div className="file-field input-field">
                    <div className="btn waves-effect-large waves-light #4caf50 green">
                      <span>Cargar</span>
                      <input type="file" multiple/>
                    </div>
                    <div className="file-path-wrapper">
                      <input
                      className="file-path validate"
                      type="text"
                      placeholder="Sube tus XML aqui"
                      />
                    </div>
                  </div>
                </form>
              </div>
              <div className="card-action">
                <Boton
                name="Siguiente"
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

export default Proceso;
