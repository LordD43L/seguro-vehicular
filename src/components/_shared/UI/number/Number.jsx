import React, { Fragment } from 'react';
import './Number.scss';

const number = ({ name, label, error, ...rest }) => {
    return (
        <Fragment>
            <div className="number-input">
                <button type='button' ></button>
                <input id={name} name={name} className="quantity" type="number" {...rest} />
                <button type='button' className="plus"></button>
            </div>
            {error && <label className='text-danger'>{error}</label>}
        </Fragment>

    );
};

export default number;