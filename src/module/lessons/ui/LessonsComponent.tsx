import { ScrollView, Text, View } from "react-native";
import { LESSONS } from "../../../core/config/shared";
import CardComponent from "../../shared/ui/CardComponent";
import { COLORS, FONT_SIZE } from "../../../core/config/template";
import ButtonComponent from "../../shared/ui/ButtonComponent";
import { useProgress } from "../../account/store/progress";
import { ROUTES } from "../../../core/route/routes";

const LessonsComponent = ({ navigation }: { navigation: any }) => {
    // DEFINE
    const { progress } = useProgress();

    return (
        <ScrollView contentContainerStyle={{
            gap: 10
        }}>
            {LESSONS.map((item, index) => (
                <CardComponent key={index}>
                    <View style={{ gap: 20 }}>
                        <Text style={{
                            fontSize: FONT_SIZE.DEFAULT
                        }}>
                            {item}
                        </Text>
                        {
                            progress.lessons[index].finished
                                ? < ButtonComponent
                                    title="Өтілді ✅"
                                    backgroundColor={COLORS.GREEN}
                                    onClick={() => navigation.navigate(ROUTES.LESSON, { lessonIndex: index })}
                                />
                                : (progress.lessons[index - 1] && progress.lessons[index - 1].finished) || index === 0
                                    ? < ButtonComponent
                                        title="Тақырыпты өту"
                                        onClick={() => navigation.navigate(ROUTES.LESSON, { lessonIndex: index })}
                                    />
                                    : <Text style={{
                                        fontSize: FONT_SIZE.DEFAULT,
                                        color: COLORS.RED
                                    }}>Алдыңғы тақырып өтілмеді ❌</Text>
                        }
                    </View>
                </CardComponent>
            ))}
        </ScrollView>
    );
}

export default LessonsComponent;