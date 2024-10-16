import React from 'react';
import { Link } from 'react-router-dom';

const Header = (props) => {
    return (
        <header>
            <nav className="navbar navbar-expand-md navbar-dark bg-dark sticky-top shadow-sm">
                <div className="container">
                    <a className="navbar-brand d-flex align-items-center" href="/accommodations">
                        <span className="font-weight-bold">Rent App</span>
                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse"
                            aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <Link className="nav-link" to="/accommodations">
                                    Accommodations
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/countries">
                                    Countries
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/hosts">
                                    Hosts
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/categories">
                                    Categories
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;
