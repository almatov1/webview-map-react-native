import { useRef, useState } from "react";
import { Animated, Pressable, StyleSheet, Text } from "react-native";
import { BORDER_RADIUS, COLORS, FONT_SIZE, PADDING } from "../../../core/config/template";

const HoldButtonComponent = ({ placeholder, onLongPress }: { placeholder: string, onLongPress: () => void }) => {
    const scale = useRef(new Animated.Value(0)).current;
    const [isPressed, setIsPressed] = useState(false);

    const handlePressIn = () => {
        setIsPressed(true);
        Animated.timing(scale, {
            toValue: 1,
            duration: 1500,
            useNativeDriver: true,
        }).start(({ finished }) => {
            if (finished) {
                onLongPress();
            }
        });
    };

    const handlePressOut = () => {
        setIsPressed(false);
        Animated.timing(scale, {
            toValue: 0,
            duration: 200,
            useNativeDriver: true,
        }).start();
    };

    const styles = StyleSheet.create({
        button: {
            padding: PADDING.DEFAULT,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: BORDER_RADIUS.DEFAULT,
            borderWidth: 1,
            borderColor: COLORS.BLUE,
            backgroundColor: COLORS.WHITE_DARK,
            overflow: "hidden",
            position: "relative"
        },
        circle: {
            position: "absolute",
            width: '100%',
            height: 150,
            backgroundColor: COLORS.BLUE,
            borderRadius: 75
        },
        text: {
            fontSize: FONT_SIZE.DEFAULT,
            color: isPressed ? COLORS.WHITE : COLORS.BLACK
        },
    });

    return (
        <Pressable
            onPressIn={handlePressIn}
            onPressOut={handlePressOut}
            style={styles.button}
        >
            <Animated.View
                style={[
                    styles.circle,
                    {
                        transform: [
                            {
                                scale: scale.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: [0, 2],
                                }),
                            },
                        ],
                    },
                ]}
            />
            <Text style={styles.text}>
                {
                    isPressed
                        ? "Ұстап тұрыңыз..."
                        : placeholder
                }
            </Text>
        </Pressable>
    );
};

export default HoldButtonComponent;