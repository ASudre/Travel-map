import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import { orange500 } from 'material-ui/styles/colors';

const style = {
    marginLeft: 20,
    underlineStyle: {
        borderColor: orange500,
    },
};

const InputCountry = ({addCountryClick}) => {
    let form = {
        country: '',
    };
    return (
        <div>
            <form onSubmit={e => {
                e.preventDefault();
                if (!form.country.input.value && !form.country.input.value.trim()) {
                    return;
                }
                addCountryClick(form.country.input.value);
                form.country.input.value = '';
            }}>
                <TextField ref={node => {
                    form.country = node;
                }}
                           hintText="Country"
                           style={style}
                    //errorText="Country not found."
                />
                <RaisedButton
                    label="Save"
                    primary
                    style={style}
                    type="submit"
                />
            </form>
        </div>
    );
};

export default InputCountry;