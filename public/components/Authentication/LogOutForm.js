import React from 'react';
import { RaisedButton } from 'material-ui';

const style = {
    marginLeft: 20,
    underlineStyle: {},
};

class LogOutForm extends React.Component {

    constructor (props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit (event) {
        this.props.logOut();
        event.preventDefault();
    }

    render () {
        return (
            <form onSubmit={this.handleSubmit}>
                <RaisedButton
                  label="Log out"
                  primary
                  style={style}
                  type="submit" />
            </form>
        );
    }

}

export default LogOutForm;