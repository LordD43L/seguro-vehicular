import React, { Component, Fragment } from 'react'
import './ArmaPlan.scss';
import { Link } from 'react-router-dom';
import ArmaPlanRoutes from './ArmaPlanRoutes';

class ArmaPlan extends Component {
    render() {
        return (
            <Fragment>
                <hr />
                <div className='row armaplan'>
                    <div className="col-12 col-sm-4 m-0 p-0">
                        <div className="pasos">
                            <ul className='pasos-items'>
                                <li className='active'><Link to='/arma-plan/datos-auto'>Datos del auto</Link></li>
                                <li className='active'><Link to='/arma-plan/coberturas'>Arma tu plan</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-12 col-sm-8 m-0 p-0">
                        <ArmaPlanRoutes />
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default ArmaPlan;