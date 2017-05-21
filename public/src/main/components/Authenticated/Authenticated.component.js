import React, { PropTypes } from 'react';
import { Redirect, Route } from 'react-router-dom';

class Authenticated extends React.Component {
    render() {
        const { authenticated, component, ...rest } = this.props;
        return (<Route
            {...rest}
            render={(props) => {
                if (authenticated) {
                    return (React.createElement(component, { ...props, authenticated }));
                }
                return (<Redirect to="/" />);
            }}
        />);
    }
}

Authenticated.propTypes = {
    authenticated: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired,
};

export default Authenticated;
