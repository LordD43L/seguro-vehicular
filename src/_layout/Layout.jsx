import React, { Component, Fragment } from 'react'
import Routes from '../routes/Routes';
import Navbar from './navbar/Navbar';
import './Layout.scss'
import { HashRouter } from 'react-router-dom';

class Layout extends Component {
    render() {
        return (
            <Fragment>
                <Navbar />
                <HashRouter basename="/">
                    <div className="main container-fluid">
                        <Routes />
                    </div>
                </HashRouter>
            </Fragment>
        )
    }
}

export default Layout;