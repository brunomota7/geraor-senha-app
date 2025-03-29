import React, { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export function PasswordItem({ data, removePassword }) {
    const [showPassword, setShowPassword] = useState(false);

    function togglePasswordVisibility() {
        setShowPassword(!showPassword);
    }
    
    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                {showPassword ? data : '•'.repeat(data.length)}
            </Text>

            <Pressable onPress={togglePasswordVisibility}>
                <Ionicons 
                    name={showPassword ? "eye-off" : "eye"}
                    size={22}
                    color="#FFF"
                />
            </Pressable>

            <Pressable onPress={removePassword} style={styles.deleteButton}>
                <Ionicons 
                    name="trash"
                    size={22}
                    color="red"
                />
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#0e0e0e",
        padding: 14,
        width: "100%",
        marginBottom: 14,
        borderRadius: 8,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    text: {
        flex: 1,
        color: "#FFF",
        fontSize: 14,
    },
    deleteButton: {
        marginLeft: 10,
    },
})