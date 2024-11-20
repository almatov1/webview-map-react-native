import { TextInput } from "react-native";
import { BORDER_RADIUS, COLORS, FONT_SIZE, PADDING } from "../../../core/config/template";

const InputComponent = ({ placeholder, value, onChange }: { placeholder: string, value: string, onChange: (text: string) => void }) => {
    return (
        <TextInput
            style={{
                borderRadius: BORDER_RADIUS.DEFAULT,
                padding: PADDING.DEFAULT,
                borderColor: COLORS.BLUE,
                borderWidth: 1,
                backgroundColor: COLORS.WHITE_DARK,
                fontSize: FONT_SIZE.DEFAULT
            }}
            placeholder={placeholder}
            value={value}
            onChangeText={onChange}
            keyboardType="default"
        />
    );
}

export default InputComponent;