import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Headline extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        const { header, desc } = this.props;

        if(!header) {
            return null;
        }

        return (
            <section data-test='headlineComponent'>
                <h3 data-test='headlineHeader'>{header}</h3>
                <p data-test='headlineDesc'>{desc}</p>
            </section>
        )
    }
}

Headline.propTypes = {
    header: PropTypes.string,
    desc: PropTypes.string,
    // Complex example for working with PropTypes (not used in component)
    tempArr: PropTypes.arrayOf(PropTypes.shape({
        fName: PropTypes.string,
        lName: PropTypes.string,
        email: PropTypes.string,
        age: PropTypes.number,
        onlineStatus: PropTypes.bool
    }))
}
export default Headline