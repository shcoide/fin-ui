import React, { useEffect, useState } from "react";
import {View,Text, Button  } from "react-native";

const Toggle=()=>{
    const [show, setShow]=useState(true)
    return(
        <View>
            <Text>Show/Hide and useeffect in unmount</Text>
            <Button title="toggle" onPress={()=>setShow(!show)}/>
            {
                show?<Users/>:null
            }
        </View>        
    );
}
const Users=()=>{
    useEffect(()=>{
        console.warn("on mount")
    })//This is called when mounted
    useEffect(()=>{
        return()=>{console.warn("on mount");}
    })//This is called when unmounted
    let timer=setInterval(()=>{
        console.warn("timer called");
    },2000)//This will work also when this component will be mounted
    useEffect(()=>{
        return()=>clearInterval(timer)
    })//This time timer is not working when th componwnt is unmounted
    return(
        <View>
            <Text>User component</Text>
        </View>
    )
}
export default Toggle;