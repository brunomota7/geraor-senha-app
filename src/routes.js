import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen } from './pages/home/index.js';
import { PasswordsScreen } from './pages/passwords/index.js';


import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export function Routes() {
    return (
        <Tab.Navigator>
            <Tab.Screen 
                name='home'
                component={HomeScreen}
                options={{ 
                    headerShown: false, 
                    tabBarShowLabel: false, 
                    tabBarIcon: ({ focused, size, color }) => {
                        if (focused) {
                            return <Ionicons size={size} color={color} name="home" />
                        }

                        return <Ionicons size={size} color={color} name="home-outline" />
                    }
                }}
            />
            <Tab.Screen 
                name='password'
                component={PasswordsScreen}
                options={{ 
                    headerShown: false,
                    tabBarShowLabel: false, 
                    tabBarIcon: ({ focused, size, color }) => {
                        if (focused) {
                            return <Ionicons size={size} color={color} name="lock-closed" />
                        }

                        return <Ionicons size={size} color={color} name="lock-closed-outline" />
                    }
                }}
            />
        </Tab.Navigator>
    )
}