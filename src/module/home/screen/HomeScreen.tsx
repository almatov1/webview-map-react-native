import { StackNavigationProp } from "@react-navigation/stack";
import { useEffect } from "react";
import { GLOBAL } from "../../../core/config/shared";
import { useProgress } from "../../account/store/progress";
import AuthComponent from "../../account/ui/AuthComponent";
import HomeComponent from "../ui/HomeComponent";
import WrapperComponent from "../../shared/ui/WrapperComponent";

const HomeScreen = ({ navigation }: { navigation: StackNavigationProp<any, any> }) => {
    // define
    useEffect(() => {
        navigation.setOptions({
            headerTitle: GLOBAL.NAME,
        });
    }, [navigation]);
    const { progress } = useProgress();

    return (
        <WrapperComponent>
            {
                progress.username
                    ? <HomeComponent navigation={navigation} />
                    : <AuthComponent />
            }
        </WrapperComponent>
    );
}

export default HomeScreen;