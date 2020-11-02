
import React from 'react'
import {View, Text, SafeAreaView, StyleSheet,Image } from 'react-native'
import CategoryButton from './CategoryButton/index'

const styles= StyleSheet.create({

    categoryButtonHolder:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: "space-evenly"
    }
    
})


const CategoriaRopa = ()  =>{ 
    return(
        <View style={styles.categoryButtonHolder}>
            <CategoryButton text='Remeras' imageUri={require('../../assets/1.png')} />
            <CategoryButton text='Pantalones' imageUri={require('../../assets/pantalon.png')} />
            <CategoryButton text='Camperas' imageUri={require('../../assets/1.png')} />
            <CategoryButton text='Buzos' imageUri={require('../../assets/buzo.png')} />
            <CategoryButton text='Vestidos' imageUri={require('../../assets/1.png')} />
        </View>
    )}

export default CategoriaRopa