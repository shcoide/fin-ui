import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import HomeStyle from '../style/homestyle';
import Icon from 'react-native-vector-icons/FontAwesome';
import LoginIcon from '../screen/login/loginicon';  
interface HeaderProps {
  profilePictureUrl?: string;
}
const Header: React.FC<HeaderProps> = ({ profilePictureUrl }) => {
  return (
    <View style={HomeStyle.head}>
         <TouchableOpacity style={HomeStyle.bars} onPress={()=>console.warn("press")}>
           <Icon name="bars" size={38} color="gray" />
         </TouchableOpacity>
         <Text style={HomeStyle.headtext}>Dashboard</Text>
         <LoginIcon profilePictureUrl={profilePictureUrl} onPress={()=>console.warn("Login")} />
       </View>
  );
};

export default Header;
