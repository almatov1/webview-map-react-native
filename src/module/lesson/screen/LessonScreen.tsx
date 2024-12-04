import { StackNavigationProp } from "@react-navigation/stack";
import { useEffect } from "react";
import WrapperComponent from "../../shared/ui/WrapperComponent";
import LessonComponent from "../ui/LessonComponent";

const LessonScreen = ({ navigation }: { navigation: StackNavigationProp<any, any> }) => {
    // define
    useEffect(() => {
        navigation.setOptions({
            headerTitle: '🗺️ Жер бетін бейнелеу тәсілдері',
        });
    }, [navigation]);

    return (
        <WrapperComponent>
            <LessonComponent navigation={navigation} />
        </WrapperComponent>
    );
}

export default LessonScreen;