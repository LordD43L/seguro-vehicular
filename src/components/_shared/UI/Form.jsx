import React, { Component } from 'react';
import Joi from 'joi-browser';
// import Button from './Button';
import Input from './input/Input';
import Checkbox from './checkbox/Checkbox'
// import GenericInput from './GenericInput';
import SelectInput from './select-input/SelectInput';
import Button from './button/Button';
import Select from './select/Select';
import Number from './number/Number';

class Form extends Component {
    state = {
        data: {},
        errors: {}
    };

    validate = () => {
        const options = { abortEarly: false };
        const { error } = Joi.validate(this.state.data, this.schema, options);
        if (!error) return null;
        const errors = {};
        for (let item of error.details) errors[item.path[0]] = item.message;
        return errors;
    };

    validateProperty = ({ name, value }) => {
        const obj = { [name]: value };
        const schema = { [name]: this.schema[name] };
        const { error } = Joi.validate(obj, schema);
        return error ? error.details[0].message : null;
    };

    handleSubmit = e => {
        e.preventDefault();
        const errors = this.validate();
        this.setState({ errors: errors || {} });
        if (errors) return;
        this.doSubmit();
    };

    handleChange = ({ currentTarget: input }) => {
        const errors = { ...this.state.errors };
        const errorMessage = this.validateProperty(input);
        if (errorMessage) errors[input.name] = errorMessage;
        else delete errors[input.name];
        const data = { ...this.state.data };
        data[input.name] = input.value;
        this.setState({ data, errors });
    };

    renderButton(label, classes) {
        return (
            <Button disabled={this.validate()} bsClasses={classes}>
                {label}
            </Button>
        );
    }

    renderInput(name, label, value, type = 'text') {
        const { data, errors } = this.state;

        return (
            <Input
                type={type}
                name={name}
                value={data[name] || value}
                label={label}
                onChange={this.handleChange}
                error={errors[name]}
            />
        );
    }

    renderCheckbox(name, label) {
        const { data, errors } = this.state;

        return (
            <Checkbox
                name={name}
                value={data[name]}
                label={label}
                onChange={this.handleChange}
                error={errors[name]}
            />
        );
    }

    renderSelectInput(name, label, value) {
        const { data, errors } = this.state;

        return (
            <SelectInput
                name={name}
                value={data[name] || value}
                label={label}
                onChange={this.handleChange}
                error={errors[name]}
            />
        );
    }

    renderSelect(name, label, options, value) {
        const { data, errors } = this.state;

        return (
            <Select
                name={name}
                value={data[name] || value}
                label={label}
                onChange={this.handleChange}
                error={errors[name]}
                options={options}
            />
        );
    }

    renderNumber(name, label, value) {
        const { data, errors } = this.state;

        return (
            <Number
                name={name}
                value={data[name] || value}
                label={label}
                onChange={this.handleChange}
                error={errors[name]}
            />
        );
    }

}

export default Form;
