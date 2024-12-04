import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ROUTES } from './routes';
import { COLORS } from '../config/template';
import LessonScreen from '../../module/lesson/screen/LessonScreen';
import MapScreen from '../../module/lesson/screen/MapScreen';
import VideoScreen from '../../module/lesson/screen/VideoScreen';
import InfoScreen from '../../module/lesson/screen/InfoScreen';

const Stack = createNativeStackNavigator();
const RouteComponent = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName={ROUTES.LESSON}
                screenOptions={{
                    headerStyle: { backgroundColor: COLORS.WHITE },
                    headerTintColor: COLORS.BLUE,
                }}
            >
                <Stack.Screen name={ROUTES.LESSON} component={LessonScreen} />
                <Stack.Screen name={ROUTES.MAP} component={MapScreen} />
                <Stack.Screen name={ROUTES.VIDEO} component={VideoScreen} />
                <Stack.Screen name={ROUTES.INFO} component={InfoScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default RouteComponent;