import 'react-native-gesture-handler';
import React, { Fragment, Component, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {
  SafeAreaView, StyleSheet,View,
  Button, Text
} from 'react-native';



const Stack = createStackNavigator();

const Counter = ()=>{
  [count, setCount] = useState(0);

  const decrementCount = ()=> {
    setCount(count + 1); 
    console.log(`increment ${count}`)
  }
  const incrementCount = () => {
    setCount(count - 1); 
    console.log(`decrement ${count}`)
  }

    return (
      <View styles={styles.container}>
        <Button
          title="increment"
          onPress={() =>incrementCount()}
        />
        <Text>{count}</Text>
        <Button
          title="decrement"
          onPress={() => decrementCount()}
        />
      </View>
    );
 
}


const  App =() => {
 return (
   <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Counter" component={Counter} />
      </Stack.Navigator>
   </NavigationContainer>
)
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default App;