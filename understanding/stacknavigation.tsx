import { NavigationContainer } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { createNativeStackNavigator} from '@react-navigation/native-stack'
import { Button } from 'react-native-elements';

const Stack = createNativeStackNavigator();
const Stacknav: React.FC = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name='Login' component={Login}/>
            <Stack.Screen name='Home' component={Home}/>
        </Stack.Navigator>
    </NavigationContainer>
  );
};

const Home=()=>{
    return(
        <View>
            <Text>Home screen</Text>
        </View>
    )
}
//When we use stack navigation then child component automatic get props for navigation to different screen
const Login=(props: { navigation: { navigate: (arg0: string) => void; }; })=>{
    return(
        <View>
            <Text>Login screen</Text>
            <Button title="Go to home" onPress={()=>props.navigation.navigate("Home")}/>
        </View>
    )
}

export default Stacknav;