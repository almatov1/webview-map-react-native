import { ReactNode } from "react";
import { ImageBackground, View } from "react-native";
import { PADDING } from "../../../core/config/template";

const WrapperComponent = ({ children }: { children: ReactNode }) => {
    return (
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
    );
}

export default WrapperComponent;