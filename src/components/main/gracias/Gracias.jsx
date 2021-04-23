import React, { Component } from 'react'
import './Gracias.scss'
import Form from './../../_shared/UI/Form';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

class Gracias extends Form {
    render() {
        const { randomUser } = this.props;

        let page = ''

        if (randomUser) {
            page = (
                <div className="row">
                    <div className="col-12 col-sm-5">
                        <img src={require('../../../assets/gracias-img.png').default} alt="" className='gracias-img' />
                    </div>
                    <div className="col-12 col-sm-5 info">
                        <div className="label-1">
                            <span>¡Te damos la bienvenida!</span><br />
                        Cuenta con nosotros para proteger tu vehículo
                    </div>
                        <div className="label-2">
                            Enviaremos la confirmación de compra de tu Plan Vehícular Tracking a tu correo:
                    </div>
                        <div className="label-3">
                            {randomUser.email}
                        </div>
                        <div className="col-12 col-sm-6 m-0 p-0">
                            <Link to='#' className='btn btn-default bg-red form-control'>COMO USAR MI SEGURO</Link>
                        </div>
                    </div>
                </div>
            )
        }
        return (
            page
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {};
};

const mapStateToProps = state => {
    return {
        randomUser: state.userRdc.user
    };
};

export default withRouter(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(Gracias)
);