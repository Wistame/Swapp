import { StyleSheet } from 'react-native';

const styles= StyleSheet.create({
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#1F1F1F',
    },
    categoryButtonHolder:{
        display: 'flex',
        flexDirection: 'row',
    },

    ScrollView: {    
        backgroundColor:'white',
        flex: 1
    },
    body:{
        paddingLeft: 25,
    },
    image:{
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
        height: 200, 
        margin: 20,

    },
    goToSwap: {
        backgroundColor: 'white',
        height: 50,
        width: 150,
        borderRadius: 24,
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    goToSwapText:{
        alignSelf: 'center',
        fontSize: 20,
        marginLeft: 10,
        fontWeight: 'bold',
        color: '#727C8E',
  
    },
    greySearch:{
        backgroundColor:'#EEEEF0'
    }
    
})
export default styles