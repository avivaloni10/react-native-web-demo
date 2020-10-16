/**
 * @format
 */

import * as React from 'react';
import { AppRegistry, Platform } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import App from './App';
import { name as appName } from './app.json';

export default function Main() {
    return (
        <PaperProvider>
            <React.Fragment>
                {Platform.OS === 'web' ? (
                <style type="text/css">{`
                    @font-face {
                    font-family: 'MaterialCommunityIcons';
                    src: url(${require('react-native-vector-icons/Fonts/MaterialCommunityIcons.ttf')}) format('truetype');
                    }
                `}</style>
                ) : null}
                <App />
            </React.Fragment>
        </PaperProvider>
    );
}

AppRegistry.registerComponent(appName, () => Main);

AppRegistry.runApplication(appName, {
    rootTag: document.getElementById('root')
});
