import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

/* const TodoList = ({ todos, toggleTodo }) => (
  <View style={{padding:20}}>
      {todos.map(todo => {
        return <TouchableOpacity key={todo.id} onPress={() => toggleTodo(todo.id)}>
          <Text
            style={{
              fontSize: 24,
              textDecorationLine: todo.completed ? "line-through" : "none"
            }}
          >
            {todo.text}
          </Text>
        </TouchableOpacity>;
      })}
    </View>
); */
class TodoList extends Component {
  render() {
    console.log("%c++TodoList", "background:purple", this.props);
    return (
      <View style={{ padding: 20 }}>
        {this.props.todos.map(todo => {
          return (
            <TouchableOpacity
              key={todo.id}
              onPress={() => this.props.toggleTodo(todo.id)}
            >
              <Text
                style={{
                  fontSize: 24,
                  textDecorationLine: todo.completed ? 'line-through' : 'none'
                }}
              >
                {todo.text}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  }
}

export default TodoList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
  },
});
