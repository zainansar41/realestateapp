import { StatusBar } from 'expo-status-bar';

import Login from './Screens/Login';
import Tabbar from './Tabbar';
import Signup from './Screens/SignupScreens/Signup';

import { NavigationContainer } from '@react-navigation/native';


import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} options={{headerShown:false}} />
        <Stack.Screen name="Signup" component={Signup} options={{headerShown:false}} />
        <Stack.Screen name="Tabbar" component={Tabbar} options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

