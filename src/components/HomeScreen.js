import React from "react";
import { View, Text, Button } from 'react-native';

function HomeScreen( { navigation } ){
    return(
        <View>
            <Text>Tela principal</Text>
            <Button title='Ir para detalhes' onPress={() => navigation.navigate('Detail')} />
        </View>
    );
}

export default HomeScreen;