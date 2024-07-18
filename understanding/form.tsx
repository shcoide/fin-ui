import React, { useState } from "react";
import {View,Text, StyleSheet, TextInput, Button  } from "react-native";

const Form=()=>{
    const [name, setName]=useState("");
    const [email, setEmail]=useState("");
    const [pass, setPass]=useState("");
    const [display,setDisplay]=useState(false);
    const resetform=()=>{
        setDisplay(false);
        setEmail("");
        setName("");
        setPass("");
    }
    return(
        <View>
            <Text style={Styleform.box}>Normal Form</Text>
            <TextInput
            style={Styleform.input}
            placeholder="Enter Name"
            onChangeText={(text)=>{setName(text)}}
            value={name}
            />
            <TextInput
            style={Styleform.input}
            placeholder="Enter Email"
            onChangeText={(text)=>{setEmail(text)}}
            value={email}
            />
            <TextInput
            style={Styleform.input}
            placeholder="Enter Password"
            secureTextEntry={true}
            onChangeText={(text)=>{setPass(text)}}
            value={pass}
            />
            <Button title="Get Details" onPress={()=>setDisplay(true)}/>
            <Button title="Clear details" onPress={resetform}/>
            <View>
                {
                    display?
                    <View>
                        <Text>{name}</Text>
                        <Text>{email}</Text>
                        <Text>{pass}</Text>
                    </View>
                    :null
                }
            </View>
        </View>        
    );
}
export default Form;
const Styleform=StyleSheet.create({
    box:{
        fontSize:20,
        borderWidth:2,
        color:'green'
    },
    input:{
        fontSize:15,
        borderWidth:2,
        color:'red'
    }
})