import { useState } from "react";
import { View, Text, Alert } from "react-native";
import { FONT_SIZE } from "../../../core/config/template";
import { capitalize } from "../../../core/util/capitalize";
import ButtonComponent from "../../shared/ui/ButtonComponent";
import CardComponent from "../../shared/ui/CardComponent";
import InputComponent from "../../shared/ui/InputComponent";
import { useProgress } from "../store/progress";

const AuthComponent = () => {
    // USERNAME
    const [username, setUsername] = useState('');
    const onPatch = (input: string) => { setUsername(capitalize(input)) };

    // SAVE
    const { patchUsername } = useProgress();
    const onSave = () => {
        if (username.length < 1) {
            Alert.alert('Ескерту', 'Есіміңізді еңгізіңіз');
            return;
        }

        patchUsername(username);
    }

    return (
        <View style={{ flex: 1, justifyContent: 'center', gap: 20 }}>
            <CardComponent>
                <View style={{ gap: 20 }}>
                    <Text style={{ fontSize: FONT_SIZE.LARGE }}>
                        📘 Жаратылыстану пәні бойынша 6-сынып оқушыларына арналған мобильді қосымша
                    </Text>
                    <InputComponent
                        placeholder="Есіміңізді еңгізіңіз"
                        value={username}
                        onChange={onPatch}
                    />
                    <ButtonComponent
                        title="Растау"
                        onClick={onSave}
                    />
                </View>
            </CardComponent>
        </View>
    );
}

export default AuthComponent;