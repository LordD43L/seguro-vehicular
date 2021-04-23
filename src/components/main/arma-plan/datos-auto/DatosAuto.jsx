import React, { Component, Fragment } from 'react'
import { Link, withRouter } from 'react-router-dom';
import './DatosAuto.scss';
import Form from './../../../_shared/UI/Form';
import Joi from 'joi-browser';
import { connect } from 'react-redux';
import * as actions from '../../../../store/actions/actionIndex';

class DatosAuto extends Form {
    state = {
        data: {
            anio: '',
            marca: '',
            monto: 0
        },
        errors: {}
    };

    schema = {
        anio: Joi.number().required(),
        marca: Joi.string().required(),
        monto: Joi.number().min(12500).max(16500).required()
    };

    componentDidMount() {
        if (!this.props.randomUser) {
            this.props.history.push('/login');
        }
        if (this.props.randomUser.datosAuto) {
            const data = this.props.randomUser.datosAuto;
            this.setState({ data });
        }
    }

    doSubmit = () => {
        const { data } = this.state;
        const newUser = { ...this.props.randomUser, datosAuto: data }
        this.props.onUpdateDatosSeguro(newUser).then(() => {
            console.log('usuariocon datos de auto', this.props.randomUser);
        });

        const { error } = this.props;
        if (!error) this.props.history.push('/arma-plan/coberturas');
    }

    render() {
        const { randomUser } = this.props;

        let page = '';

        let datos = {
            anio: '',
            marca: '',
            monto: 0,
        };

        if (randomUser && randomUser.datosAuto) {
            datos = randomUser.datosAuto;
        }

        if (randomUser) {
            page = (
                <Fragment>
                    <div className="row">
                        <div className="col-12 col-sm-6 m-0 p-0">
                            <div className="datos-auto">
                                <div className="row">
                                    <div className="col-12 col-sm-10">
                                        <Link to='/login'>Volver</Link>
                                        <div className="hola">
                                            Hola, <span> {randomUser.name.first}!</span>
                                        </div>
                                        <div className="info-1">
                                            Completa los datos de tu auto
                                        </div>
                                        <form className="frm-datos" onSubmit={this.handleSubmit}>
                                            {this.renderSelect('anio', 'Anio', { value: 2019, label: '2019' }, datos.anio)}
                                            {this.renderSelect('marca', 'Marca', { value: 'Wolkswagen', label: 'Wolkswagen' }, datos.marca)}
                                            <div className="form-group">
                                                <div className="row">
                                                    <div className="col-12 col-sm-7">
                                                        Tu auto es a gas?
                                                    </div>
                                                    <div className="col-12 col-sm-5 radio">
                                                        <input type="radio" id="si" name="gas" value="si" />
                                                        <label htmlFor="si">Si</label>
                                                        <input type="radio" id="no" name="gas" value="no" />
                                                        <label htmlFor="no">No</label>
                                                    </div>
                                                </div>
                                            </div>
                                            <hr />
                                            <div className="form-group">
                                                <div className="row">
                                                    <div className="col-12 col-sm-7">
                                                        <div className='label-suma'>
                                                            Indica la suma asegurada
                                                        </div>
                                                        <div className='label-min-max'>
                                                            <span className='min'>MIN $12,500</span><span className='max'>MAX $16,500</span>
                                                        </div>
                                                    </div>
                                                    <div className="col-12 col-sm-5">
                                                        {this.renderNumber('monto', '', datos.monto)}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <div className="row">
                                                    <div className="col-12 col-sm-7">
                                                        {this.renderButton('CONTINUAR', 'btn btn-default bg-red form-control')}
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 m-0 p-0">

                        </div>
                    </div>
                </Fragment>
            );
        }

        return (page)
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onUpdateDatosSeguro: (user) => dispatch(actions.updateDatosSeguro(user))
    };
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
    )(DatosAuto)
);