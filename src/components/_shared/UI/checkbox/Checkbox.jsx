import React from 'react';
import './Checkbox.scss';

const checkbox = ({ name, label, error, ...rest }) => {
    return (
        <div className="form-group">
            <input
                className="styled-checkbox"
                id={name}
                name={name}
                type="checkbox"
                {...rest} />
            <label htmlFor={name}>{label}</label>
            {error && <label className='text-danger'>{error}</label>}
        </div>
    );
};

export default checkbox;