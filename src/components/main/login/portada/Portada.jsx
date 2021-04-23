import React, { Component } from 'react'

class Portada extends Component {
    render() {
        return (
            <div className="col-12 col-sm-5 m-0 p-0">
                <div className="portada d-none d-sm-block">
                    <div className="col-12">
                        <img src={require('../../../../assets/mujer-auto.png').default} alt="" className='portada-img' />
                    </div>
                    <div className="col-12">
                        <div className="row">
                            <div className="col-8 offset-4">
                                <div className="label">
                                    NUEVO!
                                        </div>
                                <div className="titulo">
                                    Seguro <span>Vehicular Tracking</span>
                                </div>
                                <div className="glosa">
                                    Cuentanos donde le haras seguimiento a tu seguro
                                        </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="portada-m d-block d-sm-none">
                    <div className="row">
                        <div className="col-8 mr-0 pr-0">
                            <div className="info">
                                <div className="label">
                                    NUEVO!
                                            </div>
                                <div className="titulo">
                                    Seguro <span>Vehicular Tracking</span>
                                </div>
                                <div className="glosa">
                                    Cuentanos donde le haras seguimiento a tu seguro
                                        </div>
                            </div>
                        </div>
                        <div className="col-4">
                            <img src={require('../../../../assets/mujer-estrellas.png').default} alt="" className='portada-m-img' />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Portada;