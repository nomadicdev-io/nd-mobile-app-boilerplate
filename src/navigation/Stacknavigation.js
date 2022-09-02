import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ScreenOne from '../screens/ScreenOne';
import ScreenTwo from '../screens/ScreenTwo';

const Stack = createNativeStackNavigator();

const Stacknavigation = () => {
  return (
    <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
            headerShown: false
        }}
    > 
        <Stack.Screen name="Home" component={ScreenOne} />
        <Stack.Screen name="About" component={ScreenTwo} />
    </Stack.Navigator>
  )
}

export default Stacknavigation