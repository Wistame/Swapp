
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Counter from './components/Counter/index'
import List from './components/List/index'
import Main from './containers/Main/index'


const Stack = createStackNavigator();

const AppContent = () => (  
<NavigationContainer>
    <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name='Main' component={Main} />
        <Stack.Screen name="List" component={List} />
        <Stack.Screen name="Counter" component={Counter} />
        
    </Stack.Navigator>
</NavigationContainer>
)

export default AppContent