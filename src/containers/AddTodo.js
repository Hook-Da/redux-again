import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity
} from "react-native";
import { connect } from "react-redux";
import { addTodo } from "./../actions";

class AddTodo extends Component {
  state = {
    text: "",
    test: ""
  };

  addTodo = text => {
    //here we will update our redux store
    console.log("%c++", "background-color:lime", this.state);
    this.props.dispatch(addTodo(text));
    this.setState({ text: "" });
  };

  render() {
    return (
      <View style={{ flexDirection: "row", marginHorizontal: 20 }}>
        <TextInput
          placeholder="Create new superhero task"
          onChangeText={text => this.setState({ text })}
          value={this.state.text}
          style={{
            borderWidth: 2,
            borderColor: "#ccc",
            backgroundColor: "#eae",
            height: 50,
            flex: 1,
            padding: 5
          }}
        />
        <TouchableOpacity onPress={() => this.addTodo(this.state.text)}>
          <View
            style={{
              height: 50,
              backgroundColor: "#eae",
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <Text>Add todo</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

export default connect()(AddTodo);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
