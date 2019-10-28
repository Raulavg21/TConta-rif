import React, {Component} from 'react';


class Nav extends Component{

  render(){
    return(
      <nav className="#4caf50 green">
          <div className="nav-wrapper">
            <a href="#" className={this.props.titletype}><div className="col s1"></div>{this.props.title}</a>
            <a href="#" className="right brand-logo">
              <i className={this.props.imgtype}>{this.props.img}</i>
            </a>
          </div>
      </nav>
    );
  }
}

export default Nav;
