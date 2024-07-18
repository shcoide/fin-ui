import React, { useState } from "react";
import {View,Text,StyleSheet, StatusBar} from "react-native";
const Statusbar=()=>{
    const [click,setClick]=useState(1);
    return(
        <View>
            <Text style={{fontSize:40}}>Responsive UI </Text>   
            <StatusBar
            backgroundColor="red"
            barStyle="default"
            hidden={false}/>         
       </View>        
    );
}
const Style=StyleSheet.create({
    button:{
        color:'red',
        backgroundColor:'blue',
        fontSize:20,
        width:40,
        height:40,
        padding:5,
        margin:5
    }
})
export default Statusbar;