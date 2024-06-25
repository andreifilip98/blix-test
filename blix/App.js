
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { MainScreen } from './screens/MainScreen';
import { Provider, ThemeProvider } from 'react-native-paper';

export default function App() {
  return (
    <Provider>
      <ThemeProvider>
        <View style={styles.container}>
          <MainScreen />
        </View>
      </ThemeProvider>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
