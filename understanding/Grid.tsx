import React from "react";
import {View,Text, StyleSheet, ScrollView  } from "react-native";
//Basically in mobile view the elemnts do not directly jump downward
type Userdata={
    name:string,
    id:number
}
const Grid=()=>{
    const users:Userdata[]=[
        {
            name:'a',
            id:1
        },
        {
            name:'b',
            id:2
        },
        {
            name:'c',
            id:3
        },
        {
            name:'d',
            id:4
        }
    ]
    return(
        <View>
            <View style={{flex:1,flexDirection:'row',flexWrap:'wrap'}}>
                {/*This is for static grid making */}
                <Text style={Styles.item}>A</Text>
                <Text style={Styles.item}>A</Text>
                <Text style={Styles.item}>A</Text>
                <Text style={Styles.item}>A</Text>
                <Text style={Styles.item}>A</Text>
                <Text style={Styles.item}>A</Text>
            </View>
            <ScrollView style={{flex:1,flexDirection:'row',flexWrap:'wrap'}}>
                {
                    users.map((item)=><Text style={Styles.item}>{item.name}</Text>)
                }
                {/*This is for the dynamic creation of the grid */}
            </ScrollView>
        </View>        
    );
}
export default Grid;
const Styles=StyleSheet.create({
    item:{
        fontSize:15,
        backgroundColor:'green',
        margin:10,
        width:120,
        height:120,
        padding:5,
    }
})