import React from 'react'
import {View, Text, SafeAreaView, StyleSheet,Image } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CategoriaRopa from '../../components/CategoriaRopa/index'
import SwappTitleSVG from '../../assets/swapLogo.svg'
import Swaps from '../Swaps/index'
import Perfil from '../Perfil/index'
import Swappear from '../Perfil/index'
import Ropero from '../Ropero/index'


const Tab = createBottomTabNavigator();


const styles= StyleSheet.create({
    title: {
        fontSize: 30,
    },
    categoryButtonHolder:{
        display: 'flex',
        flexDirection: 'row',
    }
    
})


const Inicio = () =>{

    return(
    <View>
        <Text style={styles.title}>Main View</Text>
        <CategoriaRopa />
       <View>
           <Text style={styles.title} >Categorías</Text>
           <View>
            <Image style={{height: 40, width: 150}} source={require('../../assets/SwappTitle.png')} />
           </View>
       </View>
       
       <View>
           <Text style={styles.title} >Visto Recientemente</Text>
       </View>
       
       <View>
           <Text style={styles.title} >Inspirado en lo ultimo que viste</Text>
       </View>

    </View>
    )


}




const Main = () =>{

    return(
        <Tab.Navigator>
            <Tab.Screen name="inicio" component={Inicio} />
            <Tab.Screen name="Swaps" component={Swaps} />
            <Tab.Screen name="Swappear" component={Swappear} />
            <Tab.Screen name="Ropero" component={Ropero} />
            <Tab.Screen name="Main2" component={Perfil} />
        </Tab.Navigator>
    )
}




export default Main;