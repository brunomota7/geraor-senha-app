import AsyncStorage from "@react-native-async-storage/async-storage";
import { Alert } from "react-native";

const useStorage = () => {

    //buscar os items slavos
    const getItems = async (key) => {
        try {
            const passwords = await AsyncStorage.getItem(key);
            return JSON.parse(passwords) || [];
        } catch (error) {
            Alert.alert("Erro ao buscar senhas.");
            console.log(error);
            return [];
        }
    }

    //salver um item no storage
    const saveItem = async (key, value) => {
        try {
            let passwords = await getItems(key);
            passwords.push(value)

            await AsyncStorage.setItem(key, JSON.stringify(passwords));
        } catch (error) {
            Alert.alert("Erro ao salvar senha.");
            console.log(error);
        }
    }

    //remover item do storage
    const removeItem = async (key, item) => {
        try {
            let passwords = await getItems(key);
            let myPasswords = passwords.filter( (password) => {
                return (password !== item) 
            })

            await AsyncStorage.setItem(key, JSON.stringify(myPasswords));
            return myPasswords;
        } catch (error) {
            Alert.alert("Erro ao deletar senha.");
            console.log(error);
        }
    }

    return {
      getItems,
      saveItem,
      removeItem,  
    }
}

export default useStorage;