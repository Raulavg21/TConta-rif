import React, {Component} from 'react';
import Boton from './Components/Boton';

class Detalles extends Component{
  render(){
    return(
        <div className="container">
          <div className="row" id="detalles">
            <div className="card">
              <div className="card-content #4caf50 green-text">
                <span className="card-title"><h3>Detalles</h3></span>
                <br />
                <table className="centered responsive-table">
                  <thead>
                    <tr>
                      <th>Cuenta</th>
                      <th>RFC</th>
                      <th>Inicio de Operacion</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>TMaker</td>
                      <td>TMKE112398MCCCDL13</td>
                      <td>11/02/19</td>
                    </tr>
                    <tr>
                      <td>
                        <Boton
                        name="Editar"
                        img="arrow_forward"
                        link="#cuentas"
                        type="btn waves-effect waves-light #4caf50 green"
                        />
                      </td>
                    </tr>
                </tbody>
              </table>
              <br />
                <h5>Historial de Contabilidades</h5>
                <table className="centered">
                  <thead>
                    <tr>
                      <th>Bimestre</th>
                      <th>Ejercicio</th>
                      <th>ISR</th>
                      <th>IVA</th>
                      <th>Desgloce</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Nov-Dic</td>
                      <td>2019</td>
                      <td>$600.00</td>
                      <td>$85.00</td>
                      <td>
                        <Boton
                        name="Ver"
                        img="arrow_forward"
                        link="#proceso"
                        type="btn waves-effect waves-light #4caf50 green"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>
                      <form class="col s12">
                        <div class="row">
                          <div class="input-field col s12">
                            <textarea id="textarea1" class="materialize-textarea"></textarea>
                            <label for="textarea1">Bimestre</label>
                          </div>
                        </div>
                      </form>
                      </td>
                      <td>
                        <form class="col s12">
                          <div class="row">
                            <div class="input-field col s12">
                              <textarea id="textarea1" class="materialize-textarea"></textarea>
                              <label for="textarea1">Ejercicio</label>
                            </div>
                          </div>
                        </form>
                      </td>
                      <td></td>
                      <td></td>
                      <td>
                        <Boton
                        name="Nuevo"
                        img="arrow_forward"
                        link="#detalles"
                        type="btn waves-effect waves-light #4caf50 green"
                        />
                      </td>
                    </tr>
                </tbody>
              </table>
            </div>
            <div className="card-action">
              <div className="row">
                  <div>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>
    );
  }
}
export default Detalles;
