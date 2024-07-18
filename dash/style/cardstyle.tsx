import { StyleSheet } from 'react-native';

const CardStyle = StyleSheet.create({
  gradientOverlay: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 350,
    height: 180,
    borderRadius: 20,
    margin:0,
    overflow: 'hidden',
    position: 'relative',
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  imageStyle: {
    borderRadius: 20,
    opacity: 0.5,
  },
  cardContent: {
    flex:1,
    justifyContent:'space-around',
    width: '100%',
    height: '100%',
    position: 'absolute',
    padding: 20,
    // borderWidth:2,
    // borderColor:'black',
    paddingTop:10
  },
  cardtop:{
    marginBottom:20,
    flex:1,
    flexDirection:'row',
    justifyContent:'space-between'
  },
  topimage:{
    width:60,
    height:45
  },
  topimage2:{
    width:80,
    height:45
  },
  cardnumber:{
    color: '#fff',
    fontSize: 25,
    marginBottom: 5,
    width:'100%'
  },
  cardsubpart:{
    flex:1,
    flexDirection:'row',
    justifyContent:'space-between',
    width:'100%',
  },
  cardText: {
    color: '#fff',
    fontSize: 18,
    marginBottom: 5,
  },
  cardLabel: {
    color: '#fff',
    fontSize: 12,
    marginBottom: 5,
  },
});

export default CardStyle;
