import { View } from "react-native";
import { BORDER_RADIUS, COLORS, PADDING } from "../../../core/config/template";

const CardComponent = ({ children, isFlex }: { children: any, isFlex?: boolean }) => {
    return (
        <View style={{
            backgroundColor: COLORS.WHITE,
            borderRadius: BORDER_RADIUS.DEFAULT,
            padding: PADDING.DEFAULT,
            flex: isFlex ? 1 : undefined
        }}>
            {children}
        </View>
    );
}

export default CardComponent;