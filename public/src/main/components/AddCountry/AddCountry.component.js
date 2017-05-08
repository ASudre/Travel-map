import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import { RaisedButton } from 'material-ui';
import FormTextFieldComponent from '../Commons/FormTextField.component';
import style from './AddCountry.style';

const COUNTRY = 'Country';

class AddCountry extends React.Component {
    render() {
        const { handleSubmit, isLoggedIn, addCountry } = this.props;
        const submitCountry = formValues => addCountry(formValues.country, isLoggedIn);
        return (
            <form onSubmit={handleSubmit(submitCountry)} style={style}>
                <Field
                    name="country"
                    component={FormTextFieldComponent}
                    label={COUNTRY}
                    hintText={COUNTRY}
                    autoComplete="off"
                />
                <RaisedButton
                    label={isLoggedIn ? 'Save' : 'Add'}
                    primary
                    style={style}
                    type="submit"
                />
            </form>
        );
    }

}

AddCountry.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    isLoggedIn: PropTypes.bool.isRequired,
    addCountry: PropTypes.func.isRequired,
};

/** **********************
* Exports              *
************************
*/
export default reduxForm({
    form: 'addCountryForm',
})(AddCountry);
