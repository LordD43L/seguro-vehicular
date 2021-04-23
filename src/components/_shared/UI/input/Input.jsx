import React from 'react';
import './Input.scss';

const input = ({ name, label, error, ...rest }) => {
    return (
        <div className='form-group'>
            <input
                {...rest}
                name={name}
                id={name}
                className='form-control'
                placeholder={label}
                autoComplete='off'
            />
            {error && <label className='text-danger'>{error}</label>}
        </div>
    );
};

export default input;