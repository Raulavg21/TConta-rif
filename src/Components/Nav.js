import React, {Component} from 'react';

class Nav extends Component{

  render(){
    return(
      <nav className="navbar navbar-dark bg-primary">
          <div className="nav-wrapper">
            <div className="container">
            <a
            href="/"
            className={this.props.titletype}>
            {this.props.title}
            </a>
            <a
            href="#"
            className="right brand-logo">
              <i className={this.props.imgtype}>
              {this.props.img}
              </i>
            </a>
            </div>
          </div>
      </nav>
    );
  }
}

export default Nav;
