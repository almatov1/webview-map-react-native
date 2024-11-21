import { Alert, Text, View } from "react-native";
import CardComponent from "../../../shared/ui/CardComponent";
import HoldButtonComponent from "../../../shared/ui/HoldButtonComponent";
import { FONT_SIZE } from "../../../../core/config/template";
import { useProgress } from "../../../account/store/progress";
import { ROUTES } from "../../../../core/route/routes";

const LessonComponent = ({ navigation, lessonIndex }: { navigation: any, lessonIndex: number }) => {
    // DEFINE
    const { progress, patchLesson } = useProgress();
    const LESSON_MATERIALS = [
        [
            {
                label: "📱 AR",
                onClick: () => { }
            }
        ],
        [
            {
                label: "📹 Video",
                onClick: () => { }
            }
        ],
        [
            {
                label: "📄 PDF",
                onClick: () => { }
            }
        ],
        [
            {
                label: "🎧 Audio",
                onClick: () => { }
            }
        ],
        [
            {
                label: "🗺️ Map",
                onClick: () => { }
            }
        ],
        [
            {
                label: "✏️ Test",
                onClick: () => { }
            }
        ],
        [
            {
                label: "📱 AR",
                onClick: () => { }
            }
        ],
        [
            {
                label: "✏️ Test",
                onClick: () => { }
            }
        ]
    ];
    const onFinished = async () => {
        patchLesson(lessonIndex, { finished: true });
        Alert.alert('Құттықтаймыз!', 'Тақырып сәтті өтілді ✅');
        navigation(navigation.navigate(ROUTES.HOME));
    }

    return (
        <View style={{ flex: 1 }}>
            <View style={{
                flex: 1,
                flexDirection: 'row',
                flexWrap: 'wrap',
                justifyContent: 'space-between'
            }}>
                {LESSON_MATERIALS[lessonIndex].map((item, index) => (
                    <CardComponent key={index}>
                        <View style={{ width: '48%' }}>
                            <Text style={{ fontSize: FONT_SIZE.DEFAULT }}>{item.label}</Text>
                        </View>
                    </CardComponent>
                ))}
            </View>
            {
                (lessonIndex !== 7 && !progress.lessons[lessonIndex].finished) && < CardComponent >
                    <View style={{ gap: 20 }}>
                        <Text style={{ fontSize: FONT_SIZE.DEFAULT }}>Барлық материалдармен танысып болғасын төмендегі батырманы басып, ұстап тұрыңыз.</Text>
                        <HoldButtonComponent
                            placeholder="Материалдармен таныстым"
                            onLongPress={onFinished}
                        />
                    </View>
                </CardComponent>
            }
        </View >
    );
}

export default LessonComponent;