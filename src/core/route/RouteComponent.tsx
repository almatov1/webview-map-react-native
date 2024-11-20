import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ROUTES } from './routes';
import { COLORS } from '../config/template';
import HomeScreen from '../../module/home/screen/HomeScreen';

const Stack = createNativeStackNavigator();
const RouteComponent = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName={ROUTES.HOME}
                screenOptions={{
                    headerStyle: { backgroundColor: COLORS.WHITE },
                    headerTintColor: COLORS.BLUE
                }}
            >
                <Stack.Screen name={ROUTES.HOME} component={HomeScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default RouteComponent;