import React from 'react'
import {View, Text, Image, StyleSheet} from 'react-native'


const styles = StyleSheet.create ({
    image:{
        width:60,
        height: 60
    },

})
const CategoryButton = ({ text, imageUri}) =>{
    
    return ( 
        <View style={{alignItems: "center"}}>
            <Image style={styles.image} source={imageUri}/>
            <Text>{text}</Text>
        </View>
)}  


export default CategoryButton