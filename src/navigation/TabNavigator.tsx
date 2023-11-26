import React from 'react';
import { createBottomTabNavigator, BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { RouteProp } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import Home from '../screens/Home/Home';
import Wallet from '../screens/Wallet/Wallet';
import GuideTabs from '../screens/Guide/Guide';
import Chart from '../screens/Chart/Chart';
import screenSize from '../utils/utils';

type RootTabParamList = {
  Home: undefined;
  Wallet: undefined;
  Guide: undefined;
  Chart: undefined;
};

type TabScreenProps<T extends keyof RootTabParamList> = {
  navigation: BottomTabNavigationProp<RootTabParamList, T>;
  route: RouteProp<RootTabParamList, T>;
};

const Tab = createBottomTabNavigator();

type TabBarOptions = {
  activeTintColor: string;
  inactiveTintColor: string;
};

export function MyTabs() {
  const tabBarOptions: TabBarOptions = {
    activeTintColor: '#0373F3',
    inactiveTintColor: 'gray',
  };
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown:false,
        tabBarStyle: {
          
          // backgroundColor: "#1F2B42",
          height:screenSize().screenHeight*0.085,
          borderTopRightRadius:25,
          borderTopLeftRadius:25,
          paddingBottom:screenSize().screenScale*5,
          paddingTop:screenSize().screenScale*5,
          // borderTopColor:"#0A0A0A",
          // borderWidth:2,
          // marginTop:useBottomTabBarHeight()
        },
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Wallet') {
            iconName = focused ? 'wallet' : 'wallet-outline';
          } else if (route.name === 'Guide') {
            iconName = focused ? 'book' : 'book-outline';
          } else if (route.name === 'Chart') {
            iconName = focused ? 'stats-chart' : 'stats-chart-outline';
          }

          return <Icon name={iconName} size={28} color={color} />;
        },
      })}
      tabBarOptions={tabBarOptions}
      tabBarStyle={{ height: 100 }} // Adjust the height as needed
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Wallet" component={Wallet} />
      <Tab.Screen name="Guide" component={GuideTabs} />
      <Tab.Screen name="Chart" component={Chart} />
    </Tab.Navigator>
  );
}
