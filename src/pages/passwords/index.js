import { useState, useEffect } from 'react';
import { useIsFocused } from '@react-navigation/native';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import useStorage from '../../hooks/useStorage.js';
import { PasswordItem } from './components/passwordItem.js';

export function PasswordsScreen() {
    const [listPasswords, setListPasswords] = useState([]);
    const focused = useIsFocused();
    const { getItems, removeItem } = useStorage();

    useEffect(() => {
        async function loadPassword() {
            const passwords = await getItems("@pass");
            setListPasswords(passwords);
        }

        loadPassword();
    }, [focused]);

    async function handleDeletePassword(item) {
        const passwords = await removeItem("@pass", item);
        setListPasswords(passwords);
    }

    return (
        <SafeAreaView style={{ flex:1, }}>
            <View style={styles.header}>
                <Text style={styles.title}>Minhas senhas</Text>
            </View>

            <View style={styles.content}>
                <FlatList 
                    data={listPasswords}
                    keyExtractor={(item) => String(item)}
                    renderItem={({ item }) => <PasswordItem data={item} removePassword={() => handleDeletePassword(item) } /> }
                    style={{ flex: 1, paddingTop: 14, }}
                />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: "#393de9",
        paddingTop: 58,
        paddingLeft: 14,
        paddingBottom: 14,
        paddingRight: 14,
    },
    title: {
        fontSize: 24,
        color: "#FFF",
        fontWeight: "bold",
    },
    content: {
        flex: 1,
        paddingLeft: 14,
        paddingRight: 14,
    }
})