import React, { Component } from 'react'

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

export default Headline