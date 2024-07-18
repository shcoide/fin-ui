import React from "react";
import {View,Text, StyleSheet  } from "react-native";
import Styles2 from "./externalstyle";
const Style=()=>{
    return(
        <View>
            <Text style={{fontSize:40}}>This is inline style</Text>
            <Text style={Styles.textbox}>This is internal style</Text>
            <Text style={Styles2.textbox}>This is External style</Text>
            <Text style={[Styles2.textbox,Styles.textbox,{margin:50}]}>This is External style</Text>
        </View>        
    );
}
export default Style;

//Now we are going to make internal style
const Styles=StyleSheet.create({
    textbox:{
        fontSize:20,
        backgroundColor:'blue',
        color:'#fff'
    }
})
//We can also create a different js or ts file for external style 
//Then export it from there
//We can use multiple style by creating an array
