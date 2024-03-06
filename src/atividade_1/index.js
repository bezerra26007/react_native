 
 import {Text, View, Image } from 'react-native';
 import styles from './styles'; 

 import logo from '../../assets/002-1-react-native.png';
 
 const Saudacoes = (props) => {
  return(
    <Text style= {{textAlign: 'center' }}>
      olá {props.name}
    </Text>
    
  );
 }

 export default function Atividade_1() {
return(
    <View style={styles.container}>
       <Image source={logo} style={{width: '100%', height: '15%'}} /> 
      <Text style={styles.paragraph}>
        atividade_1
      </Text>

      <Saudacoes name='Mario' /> 
      <Saudacoes name='Maria' /> 
      <Saudacoes name='Bruna' />  
      <Saudacoes name='Bruno' /> 
    </View> 
);

 }