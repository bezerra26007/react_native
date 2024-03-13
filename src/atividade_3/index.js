import React, { useState } from 'react';

import { View, Text, TouchableOpacity } from 'react-native';


import styles from './styles';


export default function Atividade_3() {


    const [numero, setNumero] = useState(0);

    function Ola() {
        alert(`olá ${nome}`);
    };

    function incremento() {
        const inc = numero + 1;
        setNumero(inc);
        //console.log(numero);
    }


    function decremento() {
        const inc = numero - 1;
        setNumero(inc);
        //console.log(numero);

    }

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}> Exemplo_3</Text>

            <TouchableOpacity style={styles.botao} onPress={() => Ola('Gabriel')}>

                <Text style={styles.txtBotao} >Diga "Ola Mundo"</Text>
            </TouchableOpacity>
            <text style={styles.titulo}> Valor: {numero}</text>

            <View style={styles.botao1}>
                <TouchableOpacity style={styles.botao} onPress={() => incremento()}>
                    <Text style={styles.txtBotao} >+ </Text>
                </TouchableOpacity>
                <Text>
                    {
                        numero 
                    }
                </Text>
                <TouchableOpacity style={styles.botao} onPress={() => decremento()}>
                    <Text style={styles.txtBotao} > -</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}