import { StyleSheet } from "react-native";

const HomeStyle=StyleSheet.create({
    main:{
    //   borderWidth:2,
    //   borderColor:'red',
      margin:0,
      padding:0,
    //   backgroundColor:'skyblue'  
    },
    head:{
        backgroundColor:'#1aa5af50',
        height:50,
        flex:1,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        padding:5,
    },
    headtext:{
        fontSize:25,
        fontFamily:'serif',
        color:'rgb(40,10,10)'
    },
    bars:{
        margin:3
    },
    cardholder:{
        // borderWidth:3,
        // borderColor:'red',
        margin:0,
        padding:15,
        flex:1,
        // justifyContent:'center',
        alignItems:'center',
        // flexWrap:'wrap'
    },
    cardlogin:{
        width:370,
        backgroundColor:'skyblue',
        minHeight:20,
        marginTop:10,
        borderRadius:20,
        flex:1,
        flexDirection:'row',
        paddingHorizontal:15,
        paddingVertical:5,
        justifyContent:'space-between'
    },
    cardloginright:{
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'flex-end'
    },
    cardloginleft:{
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        width:'50%'
    },
    cardlogintext:{
        fontSize:14,
        marginHorizontal:3
    },
    cardloginbtn:{
        fontSize:14,
        marginHorizontal:3,
        color:'rgba(43,32,208,0.8)',
    },
    safeArea: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      inputContainer: {
        width: '80%',
        marginVertical: 20,
      },
      input1: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        marginVertical: 10,
      },
      container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
      },
      input: {
        width: '100%',
        padding: 8,
        marginVertical: 8,
        borderColor: 'gray',
        borderWidth: 1,
      },
})
export default HomeStyle;