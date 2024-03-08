import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container :{
        flex:1,
        backgroundColor: '#f5f5f5',
        width: '100%',
        alignItems: 'center',
    },
    titulo  : {
        fontSize: 20,
        fontWeight: 'bold',
        margin : 8,
        marginbottom: 20,

    },

    botao: {
        width: '70%',
        padding: 16,
        backgroundColor: '#000',
        color: '#f5f5f5',
        fontsize:20,
        borderRadius: 20,
        alignItems:'center'
        

    },

    txtBotao: {
        color: '#f5f5f5',
        fontSize:20,
    }
});

export default styles;