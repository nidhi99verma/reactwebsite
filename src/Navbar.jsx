import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from './images/logo.png';

const Navbar = () => {

    return (
        <> <div className='col-12 mx-auto'>
            {/* <div className=' container-fluid nav bg'> */}
            <div className='row'>

                <nav className="navbar navbar-expand-lg navbar-light bg-light">

                    <NavLink className="navbar-brand" to="/">
                        <img src={logo} className='img-fluid animated' alt='logo' />
                        {/* NidhiTechnical */}
                    </NavLink>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                            <li className="nav-item ">
                                <NavLink exact activeClassName='menu_active' className="nav-link" to="/">Home <span className="sr-only">(current)</span></NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink exact activeClassName='menu_active' className="nav-link" to="/service">Services</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink exact activeClassName='menu_active' className="nav-link" to="/about">About</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink exact activeClassName='menu_active' className="nav-link" to="/contact">Contact</NavLink>
                            </li>
                        </ul>

                    </div>

                </nav>

            </div>
        </div>
            {/* </div> */}
        </>
    );

}

export default Navbar;