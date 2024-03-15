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

    function zerar() {
        const inc = numero * 0;
        setNumero(inc);
        //console.log(numero);

    }

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}> Exemplo_3</Text>

            <TouchableOpacity style={styles.botao} onPress={() => Ola('Gabriel')}>

                <Text style={styles.txtBotao} >Diga "Ola Mundo"</Text>
            </TouchableOpacity>

            <View style={styles.botao1}>





                <View style={styles.container2}>
                    <View style={styles.container_botao}>

                  
                    <TouchableOpacity style={styles.botao2} onPress={() => incremento()}>
                        <Text style={styles.txtBotao} > +</Text>
                    </TouchableOpacity>

                    <text style={styles.titulo}> Valor: {numero}</text>


                    <TouchableOpacity style={styles.botao2} onPress={() => decremento()}>
                        <Text style={styles.txtBotao} > -</Text>
                    </TouchableOpacity>
                    </View>
                <TouchableOpacity style={styles.botao} onPress={() => zerar()}>
                    <Text style={styles.txtBotao} > Zerar</Text>
                </TouchableOpacity>


                  

                </View>
                

            </View>

        </View>


    );
}