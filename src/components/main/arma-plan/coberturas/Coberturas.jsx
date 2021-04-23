import React, { Component, Fragment } from 'react'
import { Link, withRouter } from 'react-router-dom';
import DatosAuto from '../datos-auto/DatosAuto';
import './Coberturas.scss'
import { connect } from 'react-redux';

class Coberturas extends Component {

    componentDidMount() {
        if (!this.props.randomUser) {
            this.props.history.push('/login');
        }
    }

    render() {
        const { randomUser } = this.props;

        let page = ''

        if (randomUser && randomUser.datosSeguro && randomUser.datosAuto) {
            page = (
                <Fragment>
                    <div className="row">
                        <div className="col-12 col-sm-6 m-0 p-0">
                            <div className="datos-auto">
                                <div className="row">
                                    <div className="col-12 col-sm-10">
                                        <Link to='/arma-plan/datos-auto'>Volver</Link>
                                        <div className="hola">
                                            Mira las coberturas
                                        </div>
                                        <div className="info-1">
                                            Conoce las coberturas para tu plan
                                        </div>
                                        <div className="frm-datos">
                                            <div className="card border-secondary">
                                                <div className="placa">
                                                    Placa: {randomUser.datosSeguro.placa}
                                                </div>
                                                <div className="marca">
                                                    {randomUser.datosAuto.marca} {randomUser.datosAuto.anio}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="agrega-quita-cob">
                                            <div className="label">Agrega o quita coberturas.</div>
                                            <ul id="tabs" className="nav nav-tabs">
                                                <li className="nav-item"><a href="" data-target="#tab1" data-toggle="tab" className="nav-link small text-uppercase active">PROTEGE A TU AUTO</a></li>
                                                <li className="nav-item"><a href="" data-target="#tab2" data-toggle="tab" className="nav-link small text-uppercase">PROTEGE A LOS QUE TE RODEAN</a></li>
                                                <li className="nav-item"><a href="" data-target="#tab3" data-toggle="tab" className="nav-link small text-uppercase">MEJORA TU PLAN</a></li>
                                            </ul>
                                            <br />
                                            <div className="tab-content">
                                                <div id="tab1" className="tab-pane fade active show">
                                                    <p>
                                                        He salido de casa a las cuatro menos cinco para ir a la academia de ingles de mi pueblo (Sant Cugat, al lado de Barcelona) con mi bici, na llego a la academia que está en el centro del pueblo en una plaza medio-grande y dejo donde siempre la bici atada con una pitón a un sitio de esos de poner las bicis
                                                    </p>
                                                </div>
                                                <div id="tab2" className="tab-pane fade">

                                                </div>
                                                <div id="tab3" className="tab-pane fade">

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 m-0 p-0">
                            <div className="row">
                                <div className="col-12">
                                    <div className="form-group lo-quiero">
                                        <div className="row">
                                            <div className="col-12 col-sm-7">
                                                <Link to='/gracias' className='btn btn-default bg-red form-control'>LO QUIERO</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </Fragment>
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
    )(Coberturas)
);
