import React from 'react'
import {View, Text, Image} from 'react-native'



const CategoryButton = ({ text, imageUri}) =>{
    
    return ( 
        <View>
            <Image source={imageUri}/>
            <Text>{text}</Text>
        </View>
)}  


export default CategoryButton