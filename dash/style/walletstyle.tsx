import { StyleSheet } from 'react-native';
const Walletstyles = StyleSheet.create({
    wcontainer: {
      marginBottom: 20,
      paddingVertical: 10,
      paddingHorizontal: 20,
      backgroundColor: '#fff',
      borderRadius: 10,
      width:'100%',
      minHeight:180,
      shadowColor: '#000',
      shadowOpacity: 0.1,
      shadowOffset: { width: 0, height: 2 },
      shadowRadius: 8,
      elevation: 3,
    },
    wtitle: {
      fontSize: 17,
      fontWeight: 'bold',
      marginBottom: 10,
      color: '#1aa5af90',
    },
    walletDetails: {
      marginTop: 10,
    },
  });

  export default Walletstyles;