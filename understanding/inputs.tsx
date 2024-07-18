import React, { useState } from "react";
import {View,Text, TextInput,StyleSheet, Button  } from "react-native";

const Input=()=>{
    const [name,setName]=useState("");//this is used to update a variable
    return(
        <View>
            <Text>{name}</Text>
            <TextInput 
            style={Styleinput.input}
            value={name}
            placeholder="Type your name"
            onChangeText={(text)=>setName(text)}
            />
            <Button title="Clear" onPress={()=>setName("")}></Button>
        </View>        
    );
}
//This will display the name when we type the name in the input
//Here we are using name props in input text because when we want to clear from input then we need its value to be name in state so that we can clear it
export default Input;
const Styleinput=StyleSheet.create({
    input:{
        fontSize:40,
        color:'blue'
    }
})