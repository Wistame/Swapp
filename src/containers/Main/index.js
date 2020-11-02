import React, { useState} from 'react'
import {View, Text, SafeAreaView,ScrollView, StyleSheet,Image, ImageBackground  } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CategoriaRopa from '../../components/CategoriaRopa/index'
import SwappTitleSVG from '../../assets/swapLogo.svg'
import Swaps from '../Swaps/index'
import Perfil from '../Perfil/index'
import Swappear from '../Perfil/index'
import Ropero from '../Ropero/index'
import styles from './style'

import { SearchBar } from 'react-native-elements';

const Tab = createBottomTabNavigator();

const Inicio = () =>{

    const [search, setSearch] = useState('');

    const onChangeSearch = query => setSearch(query);
    
  
    const image = { uri: "https://reactjs.org/logo-og.png" };
    return(
    <ScrollView  style={styles.ScrollView}>
        <View style={{alignSelf: 'center'}}>
            <Image style={{height: 30}} resizeMode="contain" source={require('../../assets/SwappTitle.png')} />
        </View>
        
        <View style={styles.body}>
            <SearchBar
                placeholder="Buscar prendas"
                onChangeText={onChangeSearch}
                value={search}      
                containerStyle={{backgroundColor: 'white'}}
                inputStyle={[styles.greySearch, {color: '#3C3C4399'}]}
                leftIconContainerStyle={styles.greySearch}
                rightIconContainerStyle={styles.greySearch}
                inputContainerStyle={styles.greySearch}

            />
            <Text style={styles.title} >Categorías</Text>
            <CategoriaRopa />        
           <View>
                <Text style={styles.title} >Visto Recientemente</Text>
                <ImageBackground style={styles.image}  imageStyle={{ borderRadius: 15}} source={require('../../assets/firstImage.png')}>
                    <View style={styles.goToSwap}>
                        <Text style={styles.goToSwapText}>Swappear</Text>
                        <View style={{height: 30, alignSelf: 'center'}}>
                        <Image style={{height: 50, width: 50, flex: 1,  }} resizeMode="contain" source={require('../../assets/SwapArrow.png')} />
                        </View>
                    </View>
                </ImageBackground>
                <ImageBackground style={styles.image} imageStyle={{ borderRadius: 15}} source={require('../../assets/scndImage.png')}>
                    <View style={styles.goToSwap}>
                        <Text style={styles.goToSwapText}>Swappear</Text>
                        <View style={{height: 30, alignSelf: 'center'}}>
                        <Image style={{height: 50, width: 50, flex: 1,  }} resizeMode="contain" source={require('../../assets/SwapArrow.png')} />
                        </View>
                    </View>
                </ImageBackground>
           </View>      
           <View>
               <Text style={styles.title} >Inspirado en lo ultimo que viste</Text>
           </View>
        </View>
    </ScrollView>

    )


}


const Main = () =>{

    return(
        <Tab.Navigator >
            <Tab.Screen name="inicio" component={Inicio} />
            <Tab.Screen name="Swaps" component={Swaps} />
            <Tab.Screen name="Swappear" component={Swappear} />
            <Tab.Screen name="Ropero" component={Ropero} />
            <Tab.Screen name="Perfil" component={Perfil} />
        </Tab.Navigator>
    )
}

export default Main;