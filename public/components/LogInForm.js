import React from 'react';
import {TextField, RaisedButton} from 'material-ui';

const style = {
    marginLeft: 20,
    underlineStyle: {},
};

const FORM_VALUES = {
    EMAIL : 'email',
    PASSWORD : 'password'
};

class LogInForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {email : '', password : ''};
        this.handleSubmit = this.handleSubmit.bind(this);
        this.createUser = this.createUser.bind(this);
    }

    onChange(key) {
        return event => {
            let formElement = {};
            formElement[key] = event.target.value;
            this.setState(formElement);
        }
    }

    handleSubmit(event) {
        this.props.logIn(this.state.email, this.state.password);
        event.preventDefault();
    }

    createUser(event){
        this.props.createUser(this.state.email, this.state.password);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <TextField onChange={this.onChange(FORM_VALUES.EMAIL)}
                    hintText="email"
                    style={style}
                />
                <TextField onChange={this.onChange(FORM_VALUES.PASSWORD)}
                    hintText="password"
                    style={style}
                    type="password"/>
                <RaisedButton
                    label="Log in"
                    primary
                    style={style}
                    type="submit" />
                <RaisedButton onClick={this.createUser}
                    label="Create"
                    secondary
                    style={style}
                    type="submit" />
            </form>
        );
    }

}

export default LogInForm;