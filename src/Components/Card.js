import React, { Component } from 'react';
import Nav from './Nav';
import Boton from './Boton';
import {porhacer} from './porhacer.json'

class Card extends Component{
  render(){
      return(
        <div className="container" id={this.props.id}>
          <div className="row">
            <div className="col md-12">
              <div className="card rounded-lg">
                <div className="card-header">
                  <Nav
                  title={this.props.title}
                  imgtype="large material-icons"
                  img="menu"
                  titletype="left brand-logo"
                  />
                </div>
                <div className="card-body">
                  <div className="container text-green">
                    <i className="right large material-icons">tag_faces</i>
                    <p>{this.props.description}</p>
                  </div>
                </div>
                <div className="card-action">
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
        </div>
      );
    }
}
export default Card;
