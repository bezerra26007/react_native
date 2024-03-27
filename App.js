import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
//import Exemplo_3 from './src/atividade_1/ex_3';
//import Atividade_3 from './src/atividade_3';
//import Exemplo4 from './src/ex_4';
import Atividade_4 from './src/atividade_4';


//import Atividade_3 from './src/atividade_1';


export default function App() {
  return (
    <View style={styles.container}>
      <Atividade_4 />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#b71c1c',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,


    
  },
});
