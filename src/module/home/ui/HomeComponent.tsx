import { View } from "react-native";
import HeaderComponent from "./HeaderComponent";
import ProgressComponent from "./ProgressComponent";
import InfoComponent from "./InfoComponent";
import StartComponent from "./StartComponent";

const HomeComponent = ({ navigation }: { navigation: any }) => {
    return (
        <View style={{ flex: 1, gap: 20 }}>
            <HeaderComponent />
            <ProgressComponent />
            <InfoComponent />
            <StartComponent navigation={navigation} />
        </View>
    );
}

export default HomeComponent;