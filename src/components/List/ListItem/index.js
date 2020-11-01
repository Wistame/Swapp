
import React from 'react'
 import { Text, StyleSheet, View} from 'react-native'
import { TouchableHighlight } from 'react-native-gesture-handler';
 



 const styles = StyleSheet.create({
    container: {
      paddingHorizontal: 15,
      height: 60,
      justifyContent: 'center',
      borderBottomWidth: 1,
      borderBottomColor: '#eee'
    },
    text: {
        fontSize:18,
    },
    striked: {
        textDecorationLine: 'line-through',
        textDecorationStyle: 'solid',
    }
 });
 
 const ListItem = ({desc, onPress, completed}) =>{
     return (
         <View>
        <TouchableHighlight  style={{borderWidth: 1, backgroundColor: 'red'}}  onPress={onPress} style={styles.container}>
            {completed
            ? <Text style={styles.text, styles.striked}>{desc}</Text>
            : <Text style={styles.text}>{desc}</Text>}
            
        </TouchableHighlight>
        </View>
     )
 }

 export default ListItem