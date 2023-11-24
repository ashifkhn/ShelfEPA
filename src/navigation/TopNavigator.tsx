import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Today, Tomorrow, Yesterday } from '../screens/Guide/Tabs/GuideTabs';

const Tab = createMaterialTopTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Yesterday" component={Yesterday} />
      <Tab.Screen name="Today" component={Today} />
      <Tab.Screen name="Tomorrow" component={Tomorrow} />
    </Tab.Navigator>
  );
}