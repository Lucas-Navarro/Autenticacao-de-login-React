import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Telalogin from './janelas/telalogin';
import TelaMenu from './janelas/telamenu';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" options={{headerShown: false}} component={Telalogin} />
        <Stack.Screen name="Home"  component={TelaMenu} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}