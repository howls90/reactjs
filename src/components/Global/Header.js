import { Link } from 'react-router-dom'
import React, { Component } from 'react';
import logo from './images/logo.svg';
import './css/Header.css';

import PropTypes from 'prop-types';

class Header extends Component {
  static PropTypes = {
    title: PropTypes.string.isRequired,
    items: PropTypes.array.isRequired
  };

  render() {
    const {title, items} = this.props;

    return (
      <div className="Header">
        <div className="Logo">
          <img src={logo} alt="logo" />
          <h2>{title}</h2>
          <ul className="Menu">
            {
              items && items.map(
                (item, key) => <li key={key} ><Link to={item.url}>{item.title}</Link></li>
              )
            }
          </ul>
        </div>
      </div>
    );
  }
}

export default Header;
