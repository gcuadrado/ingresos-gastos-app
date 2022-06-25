import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import GlobalState from './GlobalState';
import MainComponent from './MainComponent';

export default App = () => {
  return (
    <GlobalState>
      <PaperProvider>
        <MainComponent />
      </PaperProvider>
    </GlobalState>
  );
}
