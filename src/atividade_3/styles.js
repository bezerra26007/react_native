import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        width: '100%',
        alignItems: 'center',
        flexDirection: 'column'
    },
    titulo: {
        fontSize: 20,
        fontWeight: 'bold',
        margin: 8,
        marginbottom: 20,

    },

    botao: {
        width: '70%',
        padding: 16,
        backgroundColor: '#000',
        color: '#f5f5f5',
        fontsize: 20,
        borderRadius: 20,
        alignItems: 'center'


    },

    txtBotao: {
        color: '#f5f5f5',
        fontSize: 20,
    },


    container_botao: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems:'center',

       
        padding: 16,
        borderWidth: 4,
        width:'100%',
        margin: 16, 
        
    },

    botao2 : {
     width : '20%',
     padding: 10,
     backgroundColor: '#000',
     color: '#f5f5f5',
     alignItems: 'center',
     justifyContent:'center',
    

    }, 

    container2 : {
     borderWidth: 4,
     borderColor: 'black',
     alignItems: 'center',
     padding: 8,
     margin: 8,     
    }


    







});

export default styles;