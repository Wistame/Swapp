import React from 'react'
import { View, Text, StyleSheet} from 'react-native'

const styles = StyleSheet.create ({
    title:{
        fontSize: 30
    }
}) 
const Perfil = () =>{

    return(<View>
        <Text style={styles.title}>Perfil</Text>
    </View>
    )
}

export default Perfil