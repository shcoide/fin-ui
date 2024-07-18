import React, { useState } from "react";
import {View,Text,TouchableHighlight, StyleSheet, TouchableOpacity, ActivityIndicator, Modal, Pressable} from "react-native";
///Touchable heighlights is used when we want to make our buttons cool
//Touchable opacity is used when we want to make radio buttons
//These have onpress event in them
//To make it dynamic make a array of buttons with id and name
//Activity indicator is used to show the loading process
//Modal is imported from react native then we can add styling
//We need Pressable as it have many event like onpress, onlongpress, 
const Responsive=()=>{
    const [click,setClick]=useState(1);
    return(
        <View>
            <Text style={{fontSize:40}}>Responsive UI </Text>
            <TouchableHighlight>
                <Text style={Style.button}>Button</Text>
            </TouchableHighlight>
            <TouchableOpacity onPress={()=>setClick(2)}>
                <View>
                    <Text>Radio 1</Text>
                </View>
            </TouchableOpacity>
            <ActivityIndicator size={100} color="green" animating={true}/>
            <Modal></Modal>
            
            <Pressable
            onPress={()=>console.warn("Noremal on press")}
            onLongPress={()=>console.warn("long on press")}
            onPressIn={()=>console.warn("Press in")}
            onPressOut={()=>console.warn("press out")}
            >
                <Text style={Style.button}>Pressable</Text>
            </Pressable>
            {/*this is used when we have to make different event on buttons */}
        </View>        
    );
}
//To apply flex we need flex:1,
//if we apply flex:1 , and flex:1 to two different view then it will take 50:50 part
//it is divide in ratio wise, if when view is 1 and other have fixed size then rest are will taken to flex 1 component and 100px to another
//We can't apply much styles in button
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
export default Responsive;