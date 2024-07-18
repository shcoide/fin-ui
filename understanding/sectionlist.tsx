import React from "react";
import {View,Text, SectionList  } from "react-native";
//It is used when we have array inside the array like nested array
//For section list if we are makking an internal array then we have to use data tag and define inside it only

const Section=()=>{
    const users=[
        {
            id:1,
            name:'anil',
            data:["PHP","Reactjs","Node"]//data name can't be changed
        },
        {
            id:2,
            name:'anil',
            data:["C","Reactjs","Node"]//data name can't be changed
        },
        {
            id:3,
            name:'anil',
            data:["PHP","Reactjs","Node"]//data name can't be changed
        },
        {
            id:4,
            name:'anil',
            data:["c++","Reactjs","Node"]//data name can't be changed
        }
    ]
    return(
        <View>
            <Text>Selection List</Text>
            <SectionList
            sections={users}
            renderItem={({item})=><Text style={{fontSize:20}}>{item}</Text>}
            renderSectionHeader={({section:{name}})=>(
                <Text>{name}</Text>
            )}
            />
        </View>        
    );
}
export default Section;