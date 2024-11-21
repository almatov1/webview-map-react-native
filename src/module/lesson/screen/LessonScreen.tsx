import { StackNavigationProp } from "@react-navigation/stack";
import { useEffect } from "react";
import { LESSONS } from "../../../core/config/shared";
import WrapperComponent from "../../shared/ui/WrapperComponent";
import LessonComponent from "../ui/LessonComponent";

const LessonScreen = ({ navigation, route }: { navigation: StackNavigationProp<any, any>, route: any }) => {
    // define
    const { lessonIndex } = route.params;
    useEffect(() => {
        navigation.setOptions({
            headerTitle: LESSONS[lessonIndex],
        });
    }, [navigation]);

    return (
        <WrapperComponent>
            <LessonComponent navigation={navigation} lessonIndex={lessonIndex} />
        </WrapperComponent>
    );
}

export default LessonScreen;