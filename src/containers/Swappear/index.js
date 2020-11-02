import React from 'react'
import { View, Text, StyleSheet} from 'react-native'

const styles = StyleSheet.create ({
    title:{
        fontSize: 30
    }
}) 
const Swappear = () =>{

    return(<View>
        <Text style={styles.title}>Swappear</Text>
    </View>
    )


}

export default Swappear