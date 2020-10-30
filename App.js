import React, { Fragment, Component, useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Button,
  Text
} from 'react-native';

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
 <Counter />
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