import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function TodoItem({ item, pressHandler }) {
	return (
		<TouchableOpacity
			onPress={() => pressHandler(item.key)}
			style={styles.item}
		>
			<Text style={styles.text}>{item.text}</Text>
			<Ionicons
				name='close'
				size={32}
				color='rgba(255, 255, 255, 0.24)'
			/>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	item: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
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
