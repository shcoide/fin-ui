import React, { useEffect, useState } from "react";
import {View,Text, Button  } from "react-native";
//Use effect is used for lifecycle method in functional component
//A callback function is passed in the useeffect
//When we need that our work is copleted before loading of page then we can do that with the help of useeffect
//whenever we have to fetxh data or load then use effect is used
const Hooks=()=>{
    const [count,setCount]=useState(0);
    useEffect(()=>{
        console.warn("hello")
    },[])//Whenever there is change in state, props, refresh it is called
    //This arrow function is passed so that this will only be performed when there is mounting not just changing of stste
    useEffect(()=>{
        console.warn(count);
    },[count]) //Here it means that when count is updated this useeffect will called
    //Here this useEffect is caled when this state is called
    //We can use multiple condition by adding arrow
    return(
        <View>
            <Text> useeffect as coponentDidUpdate {count} </Text>
            <Button title="Update" onPress={()=>setCount(count+1)}/>
        </View>        
    );
}
export default Hooks;