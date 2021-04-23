import React, { Fragment } from 'react'
import { withRouter } from 'react-router-dom';
import './Login.scss'
import Form from './../../_shared/UI/Form';
import Joi from 'joi-browser';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions/actionIndex';
import Portada from './portada/Portada';

class Login extends Form {
    state = {
        data: {
            celular: '',
            placa: '',
            politica: 0,
            numeroDoc: ''
        },
        errors: {}
    };

    schema = {
        numeroDoc: Joi.string().required(),
        celular: Joi.string().required(),
        placa: Joi.string().required(),
        politica: Joi.number().required(),
    };

    async componentDidMount() {
        if (this.props.randomUser && this.props.randomUser.datosSeguro) {
            const data = this.props.randomUser.datosSeguro;
            this.setState({ data });
        }
    }

    doSubmit = () => {
        this.props.onGetRandomUser().then(() => {
            console.log('random user desde el API', this.props.randomUser);

            const { data } = this.state;

            const newUser = { ...this.props.randomUser, datosSeguro: data }

            this.props.onUpdateDatosSeguro(newUser).then(() => {
                console.log('usuariocon datos de seguro', this.props.randomUser);
            });

            const { error } = this.props;
            if (!error) this.props.history.push('/arma-plan');
        })
    }

    render() {
        let datos = {
            celular: '',
            placa: '',
            politica: 0,
            numeroDoc: ''
        };

        const { randomUser } = this.props;

        if (randomUser && randomUser.datosSeguro) {
            datos = randomUser.datosSeguro;
        }

        return (
            <Fragment>
                <div className="row">
                    <Portada />
                    <div className="col-12 col-sm-7 m-0 p-0">
                        <div className="col-12 col-sm-4 col-md-7 col-lg-4 offset-sm-3 frm-cotiza">
                            <span className="titulo-datos">
                                Dejanos tus datos
                            </span>
                            <form onSubmit={this.handleSubmit}>
                                {this.renderSelectInput('numeroDoc', 'Nro. de Doc', datos.numeroDoc)}
                                {this.renderInput('celular', 'Celular', datos.celular)}
                                {this.renderInput('placa', 'Placa', datos.placa)}
                                {this.renderCheckbox('politica', 'Acepto la Politica de Proteccion de Datos Personales y los Terminos y Condiciones')}
                                {this.renderButton('COTIZALO', 'btn btn-default bg-red form-control')}
                            </form>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

const mapStateToProps = state => {
    return {
        randomUser: state.userRdc.user,
        error: state.userRdc.error
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onGetRandomUser: () => dispatch(actions.getRandomUser()),
        onUpdateDatosSeguro: (user) => dispatch(actions.updateDatosSeguro(user))
    };
};

export default withRouter(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(Login)
);