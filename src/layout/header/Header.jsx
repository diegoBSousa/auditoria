import React from "react";
import { Route, Switch } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons';

class Header extends React.Component {
    render() {
        return (
            <nav className="main-header navbar navbar-expand navbar-white navbar-light">
                <ul className="navbar-nav">
                    {/*<img src={require('assets/images/logo-auditoria.png')}
                         alt="AUDITORIA ADS"
                         class="brand-image"
                         style={{width: '190px'}} />*/}

                    {/*<li className="nav-item">
                        <a className="nav-link" data-widget="pushmenu" href="#">
                            <i className="fas fa-bars"></i>
                        </a>
                    </li>*/}
                </ul>

                <ul className="navbar-nav ml-auto">
                    <li className="nav-item dropdown">
                        <a className="nav-link" data-toggle="dropdown" href="#">
                            <FontAwesomeIcon icon={faBell} />
                            <span className="badge badge-warning navbar-badge">15</span>
                        </a>
                        <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
                            <span className="dropdown-item dropdown-header">15 Notifications</span>
                            <div className="dropdown-divider"></div>
                            <a href="#" className="dropdown-item">
                                <i className="fas fa-envelope mr-2"></i> 4 new messages
                                <span className="float-right text-muted text-sm">3 mins</span>
                            </a>
                            <div className="dropdown-divider"></div>
                            <a href="#" className="dropdown-item">
                                <i className="fas fa-users mr-2"></i> 8 friend requests
                                <span className="float-right text-muted text-sm">12 hours</span>
                            </a>
                            <div className="dropdown-divider"></div>
                            <a href="#" className="dropdown-item">
                                <i className="fas fa-file mr-2"></i> 3 new reports
                                <span className="float-right text-muted text-sm">2 days</span>
                            </a>
                            <div className="dropdown-divider"></div>
                            <a href="#" className="dropdown-item dropdown-footer">See All Notifications</a>
                        </div>
                    </li>

                    {/*
                    <li className="nav-item dropdown">
                        <div class="user-panel mt-3 pb-3 mb-3 d-flex">
                            <div class="image">
                                <img src={require('assets/images/user.jpg')}
                                     class="img-circle elevation-2"
                                     alt="José da silva"/>
                            </div>
                            <div class="info">
                                <a href="#" class="d-block">José da silva</a>
                            </div>
                        </div>
                    </li>
                    */}



                </ul>
            </nav>
        );
    }
}

export default Header;