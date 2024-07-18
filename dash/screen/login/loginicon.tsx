import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

interface LoginIconProps {
  profilePictureUrl?: string;
  onPress: () => void;
}

const LoginIcon: React.FC<LoginIconProps> = ({ profilePictureUrl, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        {profilePictureUrl ? (
          <Image source={{ uri: profilePictureUrl }} style={styles.profileImage} />
        ) : (
          <Icon name="user-circle" size={40} color="gray" />
        )}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
});

export default LoginIcon;
