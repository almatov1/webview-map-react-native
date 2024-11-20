import { View } from "react-native";
import { useProgress } from "../../account/store/progress";
import ButtonComponent from "../../shared/ui/ButtonComponent";
import HeaderComponent from "./HeaderComponent";
import ProgressComponent from "./ProgressComponent";

const HomeComponent = ({ navigation }: { navigation: any }) => {
    // DEFINE
    const { reset } = useProgress();

    return (
        <View style={{ flex: 1, gap: 20 }}>
            <HeaderComponent />
            <ProgressComponent />
            <ButtonComponent
                title="Тақырыптар"
                onClick={reset}
            />
        </View>
    );
}

export default HomeComponent;