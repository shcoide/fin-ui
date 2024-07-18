import { StyleSheet, TextStyle  } from "react-native";
//We can also define the style type to mantain the code more effortlessely
interface Styles{
    textbox: TextStyle;
}//This defined the type of styles that we are using , Textstyle, ViewStyle, etc 
const Styles2=StyleSheet.create<Styles>({
    textbox:{
        fontSize:20,
        backgroundColor:'blue',
        color:'#fff'
    }
})
export default Styles2;