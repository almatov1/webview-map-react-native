import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ROUTES } from './routes';
import { COLORS } from '../config/template';
import HomeScreen from '../../module/home/screen/HomeScreen';
import LessonsScreen from '../../module/lessons/screen/LessonsScreen';
import LessonScreen from '../../module/lesson/list/screen/LessonScreen';

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
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default RouteComponent;