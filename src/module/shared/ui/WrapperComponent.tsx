import { ReactNode } from "react";
import { View } from "react-native";
import { PADDING } from "../../../core/config/template";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const WrapperComponent = ({ children }: { children: ReactNode }) => {
    return (
        <View style={{ flex: 1 }}>
            <GestureHandlerRootView>
                <View
                    style={{
                        flex: 1,
                        padding: PADDING.DEFAULT
                    }}
                >
                    {children}
                </View>
            </GestureHandlerRootView>
        </View>
    );
}

export default WrapperComponent;