import React, { Component } from 'react';
import "./navigation.css"

class Navigation extends Component {
    render() {
        return (
            <header id="header">
                {/* Navbar */}
                <nav className="navbar navbar-expand-md navbar-expand-xl navbar-light">
                    <div className="container-fluid pl-3 pr-3 nav-border">
                        <a className="navbar-brand" href="/#" >
                            <img src="https://5xruby.tw/assets/images/navbar/logo-c473f739.png" alt="網頁設計前後端課程 | 五倍紅寶石" />
                        </a>
                        <button className="navbar-toggler" data-toggle="collapse" data-target="#navbarSupportedContent" type="button">
                            <div className="icon-bar"></div>
                            <div className="icon-bar"></div>
                            <div className="icon-bar"></div>
                        </button>
                        <div className="collapse navbar-collapse flex-row-reverse" id="navbarSupportedContent">
                            <ul className="navbar-nav">
                                <li className="nav-item text-center">
                                    <a className="nav-link" href="/#">
                                        <span><i className="far fa-gem"></i> 線上課程</span>
                                    </a>
                                </li>
                                <li className="nav-item text-center">
                                    <a className="nav-link" href="/#">
                                        <span><i className="far fa-compass fa-lg"></i> ASTRO Camp</span>
                                        <span className="tag">報名優惠中</span>
                                    </a>
                                </li>
                                <li className="nav-item text-center">
                                    <a className="nav-link" href="/#">短期課程</a>
                                </li>
                                <li className="nav-item text-center">
                                    <a className="nav-link" href="/#">專案開發</a>
                                </li>
                                <li className="nav-item text-center">
                                    <a className="nav-link" href="/#">企業代訓</a>
                                </li>
                                <li className="nav-item text-center">
                                    <a className="nav-link" href="/#">空間租借</a>
                                </li>
                                <li className="nav-item text-center">
                                    <a className="nav-link" href="/#">最新消息</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                {/* End of navbar */}
            </header >
        )
    }
}

export default Navigation;