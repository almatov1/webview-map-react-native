import { Text, View } from "react-native";
import CardComponent from "../../shared/ui/CardComponent";
import { useProgress } from "../../account/store/progress";
import { COLORS, FONT_SIZE } from "../../../core/config/template";
import { AnimatedCircularProgress } from "react-native-circular-progress";

const ProgressComponent = () => {
    // DEFIINE
    const { progress } = useProgress();

    return (
        <CardComponent>
            <View style={{ alignItems: 'center' }}>
                <AnimatedCircularProgress
                    size={100}
                    width={5}
                    fill={Math.round((progress.lessons.filter(item => item.finished).length / progress.lessons.length) * 100)}
                    tintColor={COLORS.BLUE}
                    backgroundColor={COLORS.WHITE_DARK}
                >
                    {
                        (fill) => (
                            <Text style={{ fontSize: FONT_SIZE.LARGE }}>
                                {fill.toFixed(0).toString()}%
                            </Text>
                        )
                    }
                </AnimatedCircularProgress>
            </View>
        </CardComponent>
    );
}

export default ProgressComponent;