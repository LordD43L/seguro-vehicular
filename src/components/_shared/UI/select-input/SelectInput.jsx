import React from 'react';
import './SelectInput.scss';

const selectInput = ({ name, label, error, ...rest }) => {
    return (
        <div className="form-group">
            <div className="input-group">
                <div className="input-group-prepend">
                    <button className="btn btn-outline-secondary dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">DNI</button>
                    <div className="dropdown-menu">
                        <a className="dropdown-item" href="#">DNI</a>
                    </div>
                </div>
                <input
                    type="text"
                    id={name}
                    name={name}
                    className='form-control'
                    placeholder={label}
                    {...rest}
                    autoComplete='off'
                />
                {error && <label className='text-danger'>{error}</label>}
            </div>
        </div>
    );
};

export default selectInput;


