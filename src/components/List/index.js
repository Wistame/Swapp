import React, {useState} from 'react'
import {View, FlatList, StyleSheet} from 'react-native'
import ListItem from './ListItem'
import { connect } from 'react-redux'
import { complete, submit } from '../../reducers/todos'
import Input from '../Input/index'

const styles = StyleSheet.create({
 container: {
     flex: 1,
     backgroundColor: '#fff',
     alignItems: 'flex-start',
     justifyContent: 'flex-start',
     marginTop: 35
 },
 list: {
     alignSelf: 'stretch'
 }
})

const List = ({data, complete, submit}) =>{

    const [value, setValue] = useState('');
    handleChange = (val) =>{
        console.log(val)
        setValue(val)
    }
    const handleSubmit = () =>{
        submit(value);
        setValue('');
    }
  return( 
      <View style={styles.container}>
          <Input onSubmit={handleSubmit} onChange={handleChange} value={value} />
          <FlatList
            style={styles.list}
            data={data}
            keyExtractor={x => String(x.id)}
            renderItem={({ item })=> 
            <ListItem completed={item.completed} onPress={() => complete(item.id)} desc={item.desc}  />
           }/>
      </View>
  )
}
const mapStateToProps = state => {
    return { data: state.todos }
}

const mapDispatchToProps = dispatch =>({
    complete: (id) => dispatch(complete(id)),
    submit: (val) => dispatch(submit(val))
})
export default connect(mapStateToProps,mapDispatchToProps)(List)