import React, { useEffect, useState } from 'react';
import { View, Text, Button, Image, StyleSheet } from 'react-native';
import { GoogleSignin, statusCodes, User } from '@react-native-google-signin/google-signin';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';

GoogleSignin.configure({
  webClientId: 'YOUR_WEB_CLIENT_ID', // Get this from the Firebase console
});

const LoginScreen: React.FC = () => {
  const [userInfo, setUserInfo] = useState<User | null>(null);

  useEffect(() => {
    const checkUserSignedIn = async () => {
      try {
        const currentUser = await GoogleSignin.getCurrentUser();
        if (currentUser) {
          setUserInfo(currentUser);
        }
      } catch (err) {
        console.error(err);
      }
    };
    checkUserSignedIn();
  }, []);

  const signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const user = await GoogleSignin.signIn();
      setUserInfo(user);
    } catch (err: any) {
      if (err.code === statusCodes.SIGN_IN_CANCELLED) {
        console.log('Sign in cancelled');
      } else if (err.code === statusCodes.IN_PROGRESS) {
        console.log('Sign in in progress');
      } else if (err.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        console.log('Play services not available');
      } else {
        console.error('Some other error: ', err);
      }
    }
  };

  const signOut = async () => {
    try {
      await GoogleSignin.signOut();
      setUserInfo(null);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => console.warn('Menu pressed')}>
          <Icon name="bars" size={40} color="red" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Dashboard</Text>
      </View>
      {userInfo ? (
        <View style={styles.profileContainer}>
          {userInfo.user.photo ? (
            <Image source={{ uri: userInfo.user.photo }} style={styles.profileImage} />
          ) : (
            <Icon name="user-circle" size={100} color="gray" />
          )}
          <Text style={styles.profileText}>{userInfo.user.name}</Text>
          <Button title="Sign Out" onPress={signOut} />
        </View>
      ) : (
        <Button title="Sign In with Google" onPress={signIn} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#f8f8f8',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  profileContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  profileText: {
    fontSize: 18,
    marginBottom: 10,
  },
});

export default LoginScreen;
