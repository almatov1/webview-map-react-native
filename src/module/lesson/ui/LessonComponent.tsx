import { Alert, Pressable, Text, View } from "react-native";
import CardComponent from "../../shared/ui/CardComponent";
import HoldButtonComponent from "../../shared/ui/HoldButtonComponent";
import { FONT_SIZE } from "../../../core/config/template";
import { useProgress } from "../../account/store/progress";
import { ROUTES } from "../../../core/route/routes";

const LessonComponent = ({ navigation, lessonIndex }: { navigation: any, lessonIndex: number }) => {
    // DEFINE
    const { progress, patchLesson } = useProgress();
    const LESSON_MATERIALS = [
        [
            {
                label: "🗺️ Map",
                onClick: () => { navigation.navigate(ROUTES.MAP, { title: "Карта", uri: "file:///android_asset/html/lesson-0/index.html" }) }
            },
            {
                label: "📱 AR",
                onClick: () => {
                    navigation.navigate(ROUTES.AR, {
                        title: "Солнечная система",
                        uri: "file:///android_asset/model/lesson-0/solar.glb",
                        animation: "Default Take"
                    })
                }
            },
            {
                label: "📱 AR",
                onClick: () => {
                    navigation.navigate(ROUTES.AR, {
                        title: "Микроскоп",
                        uri: "file:///android_asset/model/lesson-0/Microscope.glb"
                    })
                }
            },
            {
                label: "📄 PDF",
                onClick: () => {
                    navigation.navigate(ROUTES.IMAGE, {
                        title: "Картинка", images: [
                            require('../../../core/assets/img/lesson-1.jpg'),
                            require('../../../core/assets/img/lesson-1.jpg'),
                            require('../../../core/assets/img/lesson-1.jpg'),
                            require('../../../core/assets/img/lesson-1.jpg'),
                            require('../../../core/assets/img/lesson-1.jpg'),
                            require('../../../core/assets/img/lesson-1.jpg')
                        ]
                    })
                }
            },
            {
                label: "🎧 Audio",
                onClick: () => {
                    navigation.navigate(ROUTES.VIDEO, { title: "Аудио", background: require('../../../core/assets/audio/sample.mp3') })
                }
            },
            {
                label: "📹 Video",
                onClick: () => { navigation.navigate(ROUTES.VIDEO, { title: "Видео", background: require('../../../core/assets/video/sample.mp4') }) }
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
                label: "📱 AR",
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
                onClick: () => { navigation.navigate(ROUTES.TEST, { title: "Тест" }) }
            },
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
                justifyContent: 'space-between',
                gap: 20
            }}>
                {LESSON_MATERIALS[lessonIndex].map((item, index) => (
                    <Pressable key={index} onPress={item.onClick} style={{ width: '47%' }}>
                        <CardComponent>
                            <View>
                                <Text style={{ fontSize: FONT_SIZE.DEFAULT }}>{item.label}</Text>
                            </View>
                        </CardComponent>
                    </Pressable>
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