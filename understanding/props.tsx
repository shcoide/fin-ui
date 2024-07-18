//This is just for the understanding of the props,
//Props are used to transfer data from one file or one module to another
//They are argument and parameter of the component
//Here to show we are using one file to understand the transfer the props
//We can transfer props from parent to child copmponent
import React from 'react';
import {View,Text  } from "react-native";

//We have to declare th type of prop that we are passing  then only it will work as it is typescript
type Propsdeclare={
    name: string; //These are the type of prop, with thier name in left and their type in right
    age: number;
}
const Props: React.FC=()=>{
    return(
        <View>
            <Text style={{fontSize:30,color:'red'}}>Parent</Text>
             <User name="Shivam" age={20}/> {/*as we have mentioned both age and number in the type declaration so we have to mention both */}
        </View>
    );
}
//We can not update props from child component but it has to be updated from parent component
//This will be more clear if we do this between two files, so it is cleared more clearly in this

const User=(props: Propsdeclare)=>{
    return(
        <View>
            <Text style={{fontSize:20,color:'blue'}}>Child</Text>{/*This is inline style */}
            <Text style={{fontSize:20,color:'blue'}}>{props.name} {props.age}</Text>
        </View>
    )
}
export default Props;