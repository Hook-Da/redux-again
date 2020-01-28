import { connect } from 'react-redux';
import TodoList from './../components/TodoList';
import { toggleTodo } from './../actions';

const one = state => {
  console.log('%c++mapStateToProps','background:blue',state);
  return {
    todos: state.todos
  };
};

const two = dispatch => {
  console.log('%c++mapDispatchToProps','background:violet',dispatch);
  return { toggleTodo: id => dispatch(toggleTodo(id)) };
};

export default connect(
  one,
  two
)(TodoList);
