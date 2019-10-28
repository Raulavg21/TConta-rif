import React, {Component} from 'react';

class Boton extends Component{

  render(){
    return(
      <div className="col s12">
        <div className="row">
          <div className="col s12">
            <a
              className={this.props.type}
              name="action"
              href={this.props.link}
              >{this.props.name}
              <i className="material-icons right">{this.props.img}</i>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Boton;
