import React, { Component } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";

class AddTodo extends Component {
  render() {
    return (
        <View style = {{flexDirection: 'row', marginHorizontal:20}}>
            <TextInput 
                placeholder="Create new superhero task"
                style={{borderWidth:2, borderColor:'#ccc', backgroundColor:'#eae', height:50, flex:1,padding:5}}
            />
            <TouchableOpacity onPress={()=>console.log('%c++','background:lime','here')}>
                <View style={{height:50, backgroundColor:'#eae', alignItems:'center', justifyContent:'center'}}>
                    <Text>Add todo</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
  }
}

export default AddTodo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
