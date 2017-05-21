import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import { RaisedButton } from 'material-ui';
import validate from './Login.validation';
import FormTextFieldComponent from '../Commons/FormTextField.component';

const style = {
    marginLeft: 20,
    underlineStyle: {},
};

const EMAIL = 'Email';
const PASSWORD = 'Password';

class LogIn extends React.Component {
    render() {
        const { handleSubmit, logIn, createUser } = this.props;
        return (<form onSubmit={handleSubmit(logIn)}>
            <Field
                name="email"
                component={FormTextFieldComponent}
                label={EMAIL}
                hintText={EMAIL}
            />
            <Field
                name="password"
                type="password"
                component={FormTextFieldComponent}
                label={PASSWORD}
                hintText={PASSWORD}
            />
            <RaisedButton
                primary
                label="Log in"
                style={style}
                type="submit"
            />
            <RaisedButton
                primary
                style={style}
                label="Sign up"
                onClick={handleSubmit(createUser)}
            />
        </form>);
    }

}

LogIn.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    logIn: PropTypes.func.isRequired,
    createUser: PropTypes.func.isRequired,
};

LogIn.defaultProps = {
    error: '',
};

/** **********************
 * Exports              *
 ************************
 */
export default reduxForm(
    {
        form: 'logInForm',
        validate,
    })(LogIn);
