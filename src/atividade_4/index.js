import { useState } from 'react';
import { View, Text, TextInput, Pressable } from 'react-native';

import styles from './styles';

export default function Atividade_4() {

    const [isFocus, setIsFocus] = useState(false);

    function focusHandler() {
        setIsFocus(true);
    }

    function blurHandler() {
        setIsFocus(false);
    }
    
    const [mensagem, setMensagem] = useState('');
    const [mens, setMens] = useState('');
    const [mens2, setMens2] = useState('');
    const [mensTela, setMensTela] = useState('');
    const [mensTela1, setMensTela1] = useState('');


    function atualizaMensagemHandler() {
        setMensTela('');
        setMensTela1();
        setMens('')
        setMens2('');


        
    }

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Atividade_4</Text>

            <Text style={styles.txtSaida}>{mensagem}</Text>

            


            
<Text style={styles.titulo}>Nome</Text>
            <Text style={styles.txtSaida}>{mensTela}</Text>
            <TextInput
                style={styles.txtEntrada}
                // placeholder='Outro texto' 
                onChangeText={(entrada) => setMens2(entrada)}
                value={mens2}
            />


<Text style={styles.titulo}>Sobrenome</Text>

<Text style={styles.txtSaida}>{mensTela}</Text>
            <TextInput
                style={styles.txtEntrada}
                // placeholder='Outro texto' 
                onChangeText={(entrada) => setMens(entrada)}
                value={mens}
            />

            
            <Pressable
                onPress={() => atualizaMensagemHandler()}
                style={styles.botao}
            >
                <Text style={styles.txtBotao}>Exibir mensagem</Text>
            </Pressable>
        </View>
    );
}