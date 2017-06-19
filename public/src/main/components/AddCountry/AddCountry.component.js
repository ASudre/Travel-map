import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import RaisedButton from 'material-ui/RaisedButton/RaisedButton';
import AutoComplete from 'material-ui/AutoComplete/AutoComplete';
import FormTextFieldComponent from '../Commons/FormTextField.component';
import style from './AddCountry.style';

const COUNTRY = 'Country';

class AddCountry extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchText: '',
        };
    }

    render() {
        this.handleUpdateInput = (searchText) => {
            this.setState({
                searchText,
            });
        };

        this.handleNewRequest = () => {
            this.setState({
                searchText: '',
            });
        };

        const { handleSubmit, isLoggedIn, addCountry, countries } = this.props;
        const countriesNames = countries.map(a => a.name);
        const submitCountry = formValues => addCountry(formValues.country, isLoggedIn);
        return (
            <form onSubmit={handleSubmit(submitCountry)} style={style}>
                <AutoComplete
                    hintText="Type 'r', case insensitive"
                    searchText={this.state.searchText}
                    onUpdateInput={this.handleUpdateInput}
                    onNewRequest={this.handleNewRequest}
                    dataSource={countriesNames}
                    filter={(searchText, key) => (key.toLowerCase().indexOf(searchText) !== -1)}
                    openOnFocus
                />
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
    countries: PropTypes.arrayOf(PropTypes.shape(PropTypes.Object)).isRequired,
};

/** **********************
 * Exports              *
 ************************
 */
export default reduxForm(
    {
        form: 'addCountryForm',
    })(AddCountry);
