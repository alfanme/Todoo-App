import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {
    FlatList,
    StyleSheet,
    View,
    Text,
    Dimensions,
    Alert,
} from 'react-native';
import Header from './components/Header';
import TodoItem from './components/TodoItem';
import AddTodo from './components/AddTodo';

export default function App() {
    const [todos, setTodos] = useState([
        { text: 'eat proper meal', key: '1' },
        { text: 'sleep min. 5 hours a day', key: '2' },
        { text: 'learn react native', key: '3' },
    ]);

    const pressHandler = (key) => {
        setTodos((prevTodos) => prevTodos.filter((todo) => todo.key !== key));
    };

    const submitHandler = (text) => {
        text !== ''
            ? setTodos((prevTodos) => {
                  return [
                      { text: text, key: Math.random().toString() },
                      ...prevTodos,
                  ];
              })
            : Alert.alert('Invalid Todo Input', 'The text field is empty');
    };

    return (
        <View style={styles.container}>
            <Header />
            <View style={styles.content}>
                <Text style={styles.info}>
                    {todos.length !== 0
                        ? 'Tap todo item to remove'
                        : "There's no todo item yet"}
                </Text>
                <FlatList
                    style={styles.list}
                    data={todos}
                    renderItem={({ item }) => (
                        <TodoItem item={item} pressHandler={pressHandler} />
                    )}
                />
            </View>
            <AddTodo submitHandler={submitHandler} />
            <StatusBar style='light' />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121212',
    },
    content: {
        height: Dimensions.get('window').height - 200,
    },
    list: {
        paddingHorizontal: 24,
    },
    info: {
        marginVertical: 24,
        fontSize: 14,
        textAlign: 'center',
        color: 'rgba(255, 255, 255, 0.5)',
    },
});
