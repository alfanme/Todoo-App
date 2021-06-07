import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';

export default function Header() {
    return (
        <View style={styles.header}>
            <Text style={styles.title}>TODOO</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        paddingTop: getStatusBarHeight(),
        height: 80 + getStatusBarHeight(),
        justifyContent: 'center',
        backgroundColor: 'rgba(255, 255, 255, 0.09)',
    },
    title: {
        textAlign: 'center',
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
        letterSpacing: 4,
    },
});
