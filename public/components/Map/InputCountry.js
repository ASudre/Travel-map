import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

const style = {
    marginLeft: 20,
};

class InputCountry extends React.Component {
    constructor (props) {
        super(props);
        this.state = {country: ''};
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    handleSubmit (event) {
        event.preventDefault();
        this.props.addCountryClick(this.state.country);
    }

    onChange (event) {
        this.setState({country: event.target.value});
    }

    render () {
        return (
            <form onSubmit={this.handleSubmit}>
                <TextField onChange={this.onChange}
                           hintText="Country"
                           style={style}
                />
                <RaisedButton
                    label="Save"
                    primary
                    style={style}
                    type="submit"/>
            </form>
        );
    }

}

export default InputCountry;