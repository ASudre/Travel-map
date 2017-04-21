import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import {orange500} from 'material-ui/styles/colors';

const style = {
    marginLeft: 20,
    underlineStyle: {
        borderColor: orange500,
    },
};

const LogInForm = ({logIn}) => {
    let form = {
        email: {
            value: '',
            error: '',
        },
        password: {
            value: '',
            error: '',
        },
    };
    return (
        <div>
            <form onSubmit={e => {
                e.preventDefault();
                if (!isValid(form.email.value) || !isValid(form.password.value)) {
                    return;
                }
                logIn(form.email.value.input.value, form.password.value.input.value);
            }}>
                <TextField ref={node => {
                    form.email.value = node;
                }}
                  hintText="email"
                  style={style}
                  errorText={form.email.error}
                />
                <TextField ref={node => {
                    form.password.value = node;
                }}
                  hintText="password"
                  style={style}
                  type="password"
                  errorText={form.password.error}
                />
                <RaisedButton
                  label="Log in"
                  primary
                  style={style}
                  type="submit"
                />
            </form>
        </div>
    );
};

const isValid = (field) => {
    return field.input.value && field.input.value.trim();
};

export default LogInForm;