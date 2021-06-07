import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export default function TodoItem({ item, pressHandler }) {
    return (
        <TouchableOpacity
            onPress={() => pressHandler(item.key)}
            style={styles.item}
        >
            <Text style={styles.text}>{item.text}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    item: {
        padding: 32,
        marginBottom: 16,
        backgroundColor: 'rgba(255, 255, 255, 0.11)',
        borderRadius: 8,
    },
    text: {
        color: '#fff',
        fontSize: 16,
    },
});
