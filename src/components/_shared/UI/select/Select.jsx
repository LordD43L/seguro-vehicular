import React from 'react';
import './Select.scss';

const select = ({ name, label, error, options, ...rest }) => {
    return (
        <div className="form-group">
            <div className="select">
                <select id={name} name={name} className="select-text" {...rest}>
                    <option value="" disabled></option>
                    <option value={options.value}>{options.label}</option>
                </select>
                <span className="select-highlight"></span>
                <span className="select-bar"></span>
                <label className="select-label">{label}</label>
            </div>
            {error && <label className='text-danger'>{error}</label>}
        </div>
    );
};

export default select;