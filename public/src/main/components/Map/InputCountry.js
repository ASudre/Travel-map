import React from 'react';
import PropTypes from 'prop-types';
import { RaisedButton, TextField } from 'material-ui';

const style = {
    marginLeft: 20,
};

class InputCountry extends React.Component {
    constructor(props) {
        super(props);
        this.state = { country: '' };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    onChange(event) {
        this.setState({ country: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.addCountryClick(this.state.country, this.props.isLoggedIn);
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <TextField
                    onChange={this.onChange}
                    hintText="Country"
                    style={style}
                />
                <RaisedButton
                    label={this.props.isLoggedIn ? 'Save' : 'Add'}
                    primary
                    style={style}
                    type="submit"
                />
            </form>
        );
    }
}

InputCountry.propTypes = {
    addCountryClick: PropTypes.func.isRequired,
    isLoggedIn: PropTypes.bool.isRequired,
};

/** **********************
 * Exports              *
 ************************
 */
export default InputCountry;