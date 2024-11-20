import { View } from "react-native";
import { BORDER_RADIUS, COLORS, PADDING } from "../../../core/config/template";

const CardComponent = ({ children }: { children: any }) => {
    return (
        <View style={{
            backgroundColor: COLORS.WHITE,
            borderRadius: BORDER_RADIUS.DEFAULT,
            padding: PADDING.DEFAULT
        }}>
            {children}
        </View>
    );
}

export default CardComponent;