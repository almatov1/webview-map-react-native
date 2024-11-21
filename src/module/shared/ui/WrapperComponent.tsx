import { ReactNode } from "react";
import { ImageBackground, View } from "react-native";
import { PADDING } from "../../../core/config/template";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const WrapperComponent = ({ children }: { children: ReactNode }) => {
    return (
        <GestureHandlerRootView>
            <View style={{ flex: 1 }}>
                <ImageBackground
                    source={require('../../../core/assets/img/background.png')}
                    resizeMode="repeat"
                    style={{
                        flex: 1,
                        padding: PADDING.DEFAULT
                    }}
                >
                    {children}
                </ImageBackground>
            </View>
        </GestureHandlerRootView>
    );
}

export default WrapperComponent;