import React, { Component, Fragment } from 'react';

import './SupportedLanguages.css';
import { ConfigContextConsumer } from './ConfigContext';

class SupportedLanguages extends Component {
    render() {
        return (
            <Fragment>
                <h2>Supported Languages</h2>
                <ul className="SupportedLanguages-list">
                    <ConfigContextConsumer>
                        {({ languages }) => languages.map(language => <li>{language}</li>)}
                    </ConfigContextConsumer>
                </ul>
            </Fragment>
        );
    }
};

export default SupportedLanguages;
