/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React,{useEffect} from 'react';
import StackNavigator from './src/navigation/StackNavigator';
import messaging from '@react-native-firebase/messaging';
import { Alert } from 'react-native';



function App(): JSX.Element {

const getDeviceToken = async () => {
  try {
    const token = await messaging().getToken();
    console.log("fcm token: ",token,);
  } catch (error) {
    console.error("Error getting device token:", error);
  }
};

useEffect(() => {
  getDeviceToken();
}, []);

 useEffect(() => {
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      Alert.alert(`Nope! Push notification wont wont this way. We'll figure out something else`);
    });

    return unsubscribe;
  }, []);

  return (
    <StackNavigator/>
  );
}


export default App;
