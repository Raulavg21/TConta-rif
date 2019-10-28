import React, {Component} from 'react';
import Nav from './Nav';
import Boton from './Boton'

class Cuenta extends Component{

  render(){
    return(
          <div className="col s12">
            <ul className="collection">
              <li className="collection-item avatar">
                <i className="material-icons circle">{this.props.img}</i>
                <span className="title">{this.props.alias}</span>
                <p>RFC</p>
                <Boton name="" img="arrow_forward" link="#detalles" type="secondary-content #4caf50 green-text"/>
              </li>
            </ul>
          </div>
    );
  }
}
export default Cuenta;
