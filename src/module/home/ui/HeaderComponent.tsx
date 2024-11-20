import { Alert, Image, Pressable, Text, View } from "react-native";
import CardComponent from "../../shared/ui/CardComponent";
import { useProgress } from "../../account/store/progress";
import { COLORS, FONT_SIZE } from "../../../core/config/template";

const HeaderComponent = () => {
    // DEFINE
    const { progress, reset } = useProgress();
    const onReset = () => {
        Alert.alert(
            "Ескерту",
            "Сіз нәтижелерді жоюды құптайсыз ба?",
            [
                { text: "Жоқ" },
                {
                    text: "Иә", onPress: reset
                },
            ],
            { cancelable: true }
        );
    }

    return (
        <CardComponent>
            <View style={{ display: 'flex', flexDirection: 'row', gap: 20, alignItems: 'center' }}>
                <Image
                    style={{ width: 60, height: 60 }}
                    source={require('../../../core/assets/img/icon.png')}
                />
                <View style={{ gap: 5 }}>
                    <Text style={{ fontSize: FONT_SIZE.LARGE }}>
                        Сәлем, {progress.username}!
                    </Text>
                    <Pressable onPress={onReset}>
                        <Text style={{ fontSize: FONT_SIZE.SMALL, textDecorationLine: 'underline', color: COLORS.RED }}>
                            Прогрессті жою
                        </Text>
                    </Pressable>
                </View>
            </View>
        </CardComponent>
    );
}

export default HeaderComponent;