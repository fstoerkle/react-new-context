import createReactContext from 'create-react-context';
import React from 'react';

const { Provider, Consumer } = createReactContext();

export default function ConfigContextContainer({ children, config }) {
    return (
        <Provider value={config}>
            {children}
        </Provider>
    );
};

export const ConfigContextConsumer = Consumer;
