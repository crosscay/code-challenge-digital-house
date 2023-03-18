import React from 'react';
import HomeScreen from '../views/HomeScreen';
import ProductDetail from '../views/ProductDetail';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';


const Stack = createStackNavigator();

const Navigator = () => {
    return ( 
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false,
                    cardStyle: {
                    backgroundColor: 'white'
                }
            }}>
                <Stack.Screen name="HomeScreen" component={ HomeScreen } />
                <Stack.Screen name="ProductDetail" component={ ProductDetail } />
            </Stack.Navigator>
        </NavigationContainer>
     );
}
 
export default Navigator;