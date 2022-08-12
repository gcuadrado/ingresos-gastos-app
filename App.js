import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { MD3LightTheme as DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import GlobalState from './GlobalState';
import MainComponent from './MainComponent';

const theme = {
  ...DefaultTheme,
  roundness: 2,
  version: 3,
  colors: {
    ...DefaultTheme.colors,
    primary: '#3498db',
    secondary: '#f1c40f',
    tertiary: '#a1b2c3',
    surfaceVariant:'#f5f5f5'
  },
};

export default App = () => {
  return (
    <GlobalState>
      <PaperProvider theme={theme}>
        <MainComponent />
      </PaperProvider>
    </GlobalState>
  );
}
