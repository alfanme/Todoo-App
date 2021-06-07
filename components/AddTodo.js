import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    KeyboardAvoidingView,
} from 'react-native';

export default function AddTodo({ submitHandler }) {
    const [text, setText] = useState('');

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.container}
        >
            <View style={styles.wrapper}>
                <TextInput
                    style={styles.input}
                    placeholder='New todo ...'
                    placeholderTextColor='rgba(255, 255, 255, 0.5)'
                    onChangeText={(val) => setText(val)}
                    defaultValue={text}
                />
                <TouchableOpacity
                    onPress={() => {
                        submitHandler(text);
                        setText('');
                    }}
                    style={styles.button}
                >
                    <Text style={styles.buttonText}>+</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: '#121212',
    },
    wrapper: {
        flexDirection: 'row',
        padding: 24,
    },
    input: {
        flexGrow: 1,
        height: 56,
        paddingHorizontal: 24,
        marginRight: 16,
        fontSize: 16,
        color: '#fff',
        backgroundColor: 'rgba(255, 255, 255, 0.11)',
        borderRadius: 8,
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 56,
        height: 56,
        backgroundColor: '#BB86FC',
        borderRadius: 28,
    },
    buttonText: {
        marginTop: -4,
        fontSize: 32,
    },
});
