 import React, {useState} from 'react';
 
 import {View, Text, TouchableOpacity} from 'react-native';


 import styles from './styles';


 export default function Exemplo_3 () {


    const [numero, setNumero] = useState(0);

    function Ola () {
        alert (`olá ${nome}`);
    };

    function incremento () {
        const inc = numero + 1;
        setNumero(inc);
        //console.log(numero);
    }

    return(
        <View style={styles.container}>
            <Text style={styles.titulo}> Exemplo_3</Text>

        <TouchableOpacity style={styles.botao} onPress={()=> Ola('Gabriel')}>

        <Text style={styles.txtBotao} >botão</Text>   
        </TouchableOpacity>
        <text style={styles.titulo}> Valor: {numero}</text>

        <TouchableOpacity style={styles.botao} onPress={()=> incremento()}>

<Text style={styles.txtBotao} >+ 1</Text>   
</TouchableOpacity>
       
        

        </View>
    );
 }