import { TextField } from 'material-ui';
import PropTypes from 'prop-types';
import React from 'react';

const style = {
    marginLeft: 20,
    underlineStyle: {},
};

const errorStyle = {
    float: 'left',
};


class FormTextFieldComponent extends React.Component {
    render() {
        const { input, label, meta: { touched, error }, ...custom } = this.props;
        return (<TextField
            style={style}
            floatingLabelText={label}
            errorText={touched && error}
            errorStyle={errorStyle}
            {...input}
            {...custom}
        />);
    }
}

FormTextFieldComponent.propTypes = {
    input: PropTypes.object.isRequired,
    label: PropTypes.string.isRequired,
    meta: PropTypes.object.isRequired,
};


export default FormTextFieldComponent;
