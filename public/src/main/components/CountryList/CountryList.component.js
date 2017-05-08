import { List, ListItem, FontIcon } from 'material-ui';
import { red500 } from 'material-ui/styles/colors';
import PropTypes from 'prop-types';
import React from 'react';
import styles from './Country.style';

class CountryList extends React.Component {
    render() {
        const onclick = country => () => {
            this.props.removeCountry(country);
        };

        const rightIcon = country => (
            <FontIcon
                className="material-icons"
                onClick={onclick(country)}
                hoverColor={red500}
            >
                remove_circle_outline
            </FontIcon>);

        const countries = this.props.countries.map(country => (
            <ListItem
                key={country}
                primaryText={country}
                rightIcon={rightIcon(country)}
            />
        ));
        return countries.length > 0 ? (
            <List
                style={styles.countryList}
                height={50}
                width={100}
                background="#f8f8f8"
                hoverOffset={25}
            >
                {countries}
            </List>
        ) : null;
    }
}

CountryList.propTypes = {
    countries: PropTypes.array.isRequired,
    removeCountry: PropTypes.func.isRequired,
};

/** **********************
 * Exports              *
 ************************
 */
export default CountryList;
