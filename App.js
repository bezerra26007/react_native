import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import Props from './src/atividade_1';

export default function App() {
  return (
    <View style={styles.container}>
      <Props mensagem= {'Sistem react-native'} />
      <Props mensagem= {'Hoje está calor'} />
      <StatusBar style="auto" />
    </View>
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
