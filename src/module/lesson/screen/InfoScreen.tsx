import { StackNavigationProp } from "@react-navigation/stack";
import { useEffect } from "react";
import WrapperComponent from "../../shared/ui/WrapperComponent";
import { ScrollView, Text } from "react-native";
import { FONT_SIZE } from "../../../core/config/template";
import CardComponent from "../../shared/ui/CardComponent";

const InfoScreen = ({ navigation, route }: { navigation: StackNavigationProp<any, any>, route: any }) => {
    // DEFINE
    const { title, header, text } = route.params;
    useEffect(() => {
        navigation.setOptions({
            headerTitle: title,
        });
    }, [navigation]);

    return (
        <WrapperComponent>
            <CardComponent>
                <ScrollView contentContainerStyle={{ gap: 20 }}>
                    <Text style={{ fontSize: FONT_SIZE.LARGE }}>{header}</Text>
                    <Text style={{ fontSize: FONT_SIZE.DEFAULT }}>{text}</Text>
                </ScrollView>
            </CardComponent>
        </WrapperComponent>
    );
}

export default InfoScreen;