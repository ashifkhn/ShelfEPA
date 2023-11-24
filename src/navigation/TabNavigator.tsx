import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home/Home';
import Wallet from '../screens/Wallet/Wallet';
import GuideTabs from '../screens/Guide/Guide';
import Chart from '../screens/Chart/Chart';

const Tab = createBottomTabNavigator();

export function MyTabs() {
  return (
    <Tab.Navigator  screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Wallet" component={Wallet} />
      <Tab.Screen name="Guide" component={GuideTabs} />
      <Tab.Screen name="Chart" component={Chart} />
    </Tab.Navigator>
  );
}