import { StackNavigationProp } from "@react-navigation/stack";
import { useEffect, useState } from "react";
import { GLOBAL } from "../../../core/config/shared";
import { Text, View } from "react-native";
import WrapperComponent from "../../shared/ui/WrapperComponent";
import { FONT_SIZE } from "../../../core/config/template";
import CardComponent from "../../shared/ui/CardComponent";
import ButtonComponent from "../../shared/ui/ButtonComponent";
import InputComponent from "../../shared/ui/InputComponent";

const HomeScreen = ({ navigation }: { navigation: StackNavigationProp<any, any> }) => {
    // define
    useEffect(() => {
        navigation.setOptions({
            headerTitle: GLOBAL.NAME,
        });
    }, [navigation]);

    // text
    const [text, setText] = useState('');

    return (
        <View style={{ flex: 1 }}>
            <WrapperComponent>
                <View style={{ flex: 1, justifyContent: 'center', gap: 20 }}>
                    <CardComponent>
                        <View style={{ gap: 20 }}>
                            <Text style={{ fontSize: FONT_SIZE.LARGE }}>Сәлем!</Text>
                            <InputComponent
                                placeholder="Есіміңізді еңгізіңіз"
                                value={text}
                                onChange={setText}
                            />
                            <ButtonComponent
                                title="Растау"
                                onClick={() => { }}
                            />
                        </View>
                    </CardComponent>
                </View>
            </WrapperComponent>
        </View>
    );
}

export default HomeScreen;