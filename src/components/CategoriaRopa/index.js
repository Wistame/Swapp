
import React from 'react'
import {View, Text, SafeAreaView, StyleSheet,Image } from 'react-native'
import CategoryButton from './CategoryButton/index'

const styles= StyleSheet.create({

    categoryButtonHolder:{
        display: 'flex',
        flexDirection: 'row',
    }
    
})


const CategoriaRopa = ()  =>{ 
    return(
        <View style={styles.categoryButtonHolder}>
            <CategoryButton text='Remeras' imageUri={require('../../assets/1.png')} />
            <CategoryButton text='Pantalones' imageUri={require('../../assets/1.png')} />
            <CategoryButton text='Camperas' imageUri={require('../../assets/1.png')} />
            <CategoryButton text='Buzos' imageUri={require('../../assets/1.png')} />
            <CategoryButton text='Vestidos' imageUri={require('../../assets/1.png')} />
        </View>
    )}

export default CategoriaRopa