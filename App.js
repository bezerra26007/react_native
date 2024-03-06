import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Exemplo_3 from './src/atividade_1/ex_3';

//import Atividade_1 from './src/atividade_1';


export default function App() {
  return (
    <View style={styles.container}>
      <Exemplo_3 />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
  },
});
