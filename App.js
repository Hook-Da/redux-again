import React, { Fragment } from "react";
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar
} from "react-native";

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions
} from "react-native/Libraries/NewAppScreen";

import store from "./src/store";
import { Provider } from "react-redux";

import TodoApp from "./src/TodoApp";

const App = () => {
    return <Provider store={store}><TodoApp /></Provider>
};

const styles = StyleSheet.create({});

export default App;
