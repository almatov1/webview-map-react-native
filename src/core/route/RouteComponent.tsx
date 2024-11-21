import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ROUTES } from './routes';
import { COLORS } from '../config/template';
import HomeScreen from '../../module/home/screen/HomeScreen';
import LessonsScreen from '../../module/lessons/screen/LessonsScreen';
import LessonScreen from '../../module/lesson/screen/LessonScreen';
import MapScreen from '../../module/lesson/screen/MapScreen';
import VideoScreen from '../../module/lesson/screen/VideoScreen';
import TestScreen from '../../module/lesson/screen/TestScreen';
import ImageScreen from '../../module/lesson/screen/ImageScreen';

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
                <Stack.Screen name={ROUTES.LESSONS} component={LessonsScreen} />
                <Stack.Screen name={ROUTES.LESSON} component={LessonScreen} />
                <Stack.Screen name={ROUTES.MAP} component={MapScreen} />
                <Stack.Screen name={ROUTES.VIDEO} component={VideoScreen} />
                <Stack.Screen name={ROUTES.TEST} component={TestScreen} />
                <Stack.Screen name={ROUTES.IMAGE} component={ImageScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default RouteComponent;