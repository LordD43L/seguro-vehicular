import React, { Component } from 'react'
import './Navbar.scss'

class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-xs navbar-light navbar-padding">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="#">
                            <img src={require('../../assets/logo-rimac.png').default} alt="" />
                        </a>
                    </li>
                </ul>
                <span className='duda mr-4 d-none d-sm-inline'>
                    Tienes alguna duda?
                </span>
                <span>
                    <i className="fas fa-phone-alt mr-2"></i>
                    <span className='d-inline d-sm-none'>Llamanos</span>
                    <span className='d-none d-sm-inline'>(01) 4116001</span>
                </span>
            </nav>
        )
    }
}

export default Navbar
