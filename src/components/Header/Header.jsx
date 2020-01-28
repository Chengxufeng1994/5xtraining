import React, { Component } from 'react';
import data from '../../db/header.json';
import './Header.css';

class Header extends Component {
  headerList() {
    return (
      data.map((item, index) => {
        switch (index) {
          case 0:
            return (
              <li key={index} className="nav-item text-center">
                <a className="nav-link" href={item.to}>
                  <span>
                    <i className="far fa-gem" />
                    {' '}
                    {item.title}
                  </span>
                </a>
              </li>
            );
          case 1:
            return (
              <li key={index} className="nav-item text-center">
                <a className="nav-link" href={item.to}>
                  <span>
                    <i className="far fa-compass fa-lg" />
                    {' '}
                    {item.title}
                  </span>
                  <span className="tag">報名優惠中</span>
                </a>
              </li>
            );
          default:
            return (
              <li key={index} className="nav-item text-center">
                <a className="nav-link" href={item.to}>{item.title}</a>
              </li>
            );
        }
      })
    );
  }

  render() {
    return (
      <header className="header">
        {/* Navbar */}
        <nav className="navbar navbar-expand-md navbar-expand-xl navbar-light">
          <div className="container-fluid pl-3 pr-3 nav-border">
            <a className="navbar-brand" href="/#">
              <img src="https://5xruby.tw/assets/images/navbar/logo-c473f739.png" alt="網頁設計前後端課程 | 五倍紅寶石" />
            </a>
            <button className="navbar-toggler" data-toggle="collapse" data-target="#navbarSupportedContent" type="button">
              <div className="icon-bar" />
              <div className="icon-bar" />
              <div className="icon-bar" />
            </button>
            <div className="collapse navbar-collapse flex-row-reverse" id="navbarSupportedContent">
              <ul className="navbar-nav">
                {this.headerList()}
              </ul>
            </div>
          </div>
        </nav>
        {/* End of navbar */}
      </header>
    );
  }
}

export default Header;
