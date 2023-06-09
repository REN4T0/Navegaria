import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen';
import DetailScreen from './DetailScreen';

const Stack = createStackNavigator();

function AppNavigator(){
    return(
        <Stack.Navigator>
            <Stack.Screen name='Home' component={ HomeScreen } />
            <Stack.Screen name='Detail' component={ DetailScreen } />
        </Stack.Navigator>
    );
}

export default AppNavigator;

