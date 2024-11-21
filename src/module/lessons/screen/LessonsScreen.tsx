import { StackNavigationProp } from "@react-navigation/stack";
import { useEffect } from "react";
import WrapperComponent from "../../shared/ui/WrapperComponent";
import LessonsComponent from "../ui/LessonsComponent";

const LessonsScreen = ({ navigation }: { navigation: StackNavigationProp<any, any> }) => {
    // define
    useEffect(() => {
        navigation.setOptions({
            headerTitle: "📚 Тақырыптар",
        });
    }, [navigation]);

    return (
        <WrapperComponent>
            <LessonsComponent navigation={navigation} />
        </WrapperComponent>
    );
}

export default LessonsScreen;