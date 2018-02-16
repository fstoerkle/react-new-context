import createReactContext from 'create-react-context';
import React from 'react';

const { Provider, Consumer } = createReactContext();

const config = {
    languages: [
      'English',
      'Deutsch',
      'Svenska',
      'Norsk',
      'Bairisch'
    ]
  };

export default function ConfigContextContainer({ children }) {
    return (
        <Provider value={config}>
            {children}
        </Provider>
    );
};

export const ConfigContextConsumer = Consumer;
