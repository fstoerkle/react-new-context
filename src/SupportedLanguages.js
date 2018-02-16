import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import './SupportedLanguages.css';

class SupportedLanguages extends Component {
    render() {
        const { config } = this.context;
        const items = config.languages.map(language => <li>{language}</li>);
        return (
            <Fragment>
                <h2>Supported Languages</h2>
                <ul className="SupportedLanguages-list">{items}</ul>
            </Fragment>
        );
    }
}

SupportedLanguages.contextTypes = {
    config: PropTypes.obj
};

export default SupportedLanguages;
