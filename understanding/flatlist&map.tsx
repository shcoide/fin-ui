import React from "react";
import {View,Text, FlatList, ScrollView  } from "react-native";
//We often use Flatlist but we can also use direct mspping but for large data set Flatlist is good to use
//As Flatlist contain many functionality like footer, header, opacity , lazy loading etc
//Flat list provide auto scrollin feature but map function do not so we have to use ScrollView
type Userdata={
    name:string,
    id:number
}
//We can also pass this data thrpugh props and then use flatlist to map the items
const Flatlist=()=>{
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
            <Text style={{fontSize:30,color:'blue'}}>List with flatlist</Text>
            <FlatList
            data={users}
            renderItem={({item})=><Text>{item.name}</Text>}
            />
            {/*Now we are using map function  */}
            <ScrollView>
                {
                    users.map((item)=><Text>{item.name}</Text>)
                }
                {/*This will also provide the same as flatlist */}
            </ScrollView>
            <ScrollView>
                {/*Module and component in flat list */}
            <FlatList
            data={users}
            renderItem={({item})=> <Userdataf item={item}/>}
            />
            </ScrollView>
        </View>        
    );
}
type UserdatafProps = {
    item: Userdata;
  };
const Userdataf=(props:UserdatafProps)=>{
    const item=props.item;
    return(
        <View>
            <Text>{item.name}</Text>
        </View>
    )
}
export default Flatlist;