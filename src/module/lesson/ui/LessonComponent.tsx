import { Alert, Linking, Pressable, Text, View } from "react-native";
import CardComponent from "../../shared/ui/CardComponent";
import HoldButtonComponent from "../../shared/ui/HoldButtonComponent";
import { FONT_SIZE } from "../../../core/config/template";
import { useProgress } from "../../account/store/progress";
import { ROUTES } from "../../../core/route/routes";
import { ScrollView } from "react-native-gesture-handler";

const LessonComponent = ({ navigation, lessonIndex }: { navigation: any, lessonIndex: number }) => {
    // DEFINE
    const { progress, patchLesson } = useProgress();
    const LESSON_MATERIALS = [
        // [
        //     {
        //         label: "🗺️ Map",
        //         onClick: () => { navigation.navigate(ROUTES.MAP, { title: "Карта", uri: "file:///android_asset/html/lesson-0/index.html" }) }
        //     },
        //     {
        //         label: "📱 AR",
        //         onClick: () => {
        //             setARUri("file:///android_asset/model/lesson-0/solar.glb");
        //             setARAnimation("Default Take");
        //             setARShow(true);
        //         }
        //     },
        //     {
        //         label: "📱 AR",
        //         onClick: () => {
        //             setARUri("file:///android_asset/model/lesson-0/Microscope.glb");
        //             setARAnimation(undefined);
        //             setARShow(true);
        //         }
        //     },
        //     {
        //         label: "📄 PDF",
        //         onClick: () => {
        //             navigation.navigate(ROUTES.IMAGE, {
        //                 title: "Картинка", images: [
        //                     require('../../../core/assets/img/lesson-1.jpg'),
        //                     require('../../../core/assets/img/lesson-1.jpg'),
        //                     require('../../../core/assets/img/lesson-1.jpg'),
        //                     require('../../../core/assets/img/lesson-1.jpg'),
        //                     require('../../../core/assets/img/lesson-1.jpg'),
        //                     require('../../../core/assets/img/lesson-1.jpg')
        //                 ]
        //             })
        //         }
        //     },
        //     {
        //         label: "🎧 Audio",
        //         onClick: () => {
        //             navigation.navigate(ROUTES.VIDEO, { title: "Аудио", background: require('../../../core/assets/audio/sample.mp3') })
        //         }
        //     },
        //     {
        //         label: "📹 Video",
        //         onClick: () => { navigation.navigate(ROUTES.VIDEO, { title: "Видео", background: require('../../../core/assets/video/sample.mp4') }) }
        //     }
        // ],
        [
            // {
            //     label: "🗺️ Жер шарының географиялық картасы",
            //     onClick: () => { navigation.navigate(ROUTES.MAP, { title: "🗺️ Жер шарының географиялық картасы", uri: "file:///android_asset/html/ar.html" }) }
            // },
            {
                label: "📱 Макроәлем AR моделі",
                onClick: () => onAR("https://github.com/almatov1/education-app-react-native/raw/refs/heads/main/android/app/src/main/assets/model/lesson-1/solar.glb")
            },
            // {
            //     label: "📱 Микроәлем AR моделі",
            //     onClick: () => {
            //         setARUri("file:///android_asset/model/lesson-1/atom.glb");
            //         setARAnimation("Take 01");
            //         setARShow(true);
            //         setARZoom([0.3, 1]);
            //     }
            // },
            // {
            //     label: "📱 Телескоптың AR моделі",
            //     onClick: () => {
            //         setARUri("file:///android_asset/model/lesson-1/telescope.glb");
            //         setARAnimation(undefined);
            //         setARShow(true);
            //         setARZoom([0.3, 1]);
            //     }
            // },
            // {
            //     label: "📱 Микроскоптың AR моделі",
            //     onClick: () => {
            //         setARUri("file:///android_asset/model/lesson-1/microscope.glb");
            //         setARAnimation(undefined);
            //         setARShow(true);
            //         setARZoom([0.4, 1]);
            //     }
            // }
        ],
        [
            // {
            //     label: "📱 Жер шарының AR моделі",
            //     onClick: () => {
            //         setARUri("file:///android_asset/model/lesson-2/earth.glb");
            //         setARAnimation("");
            //         setARShow(true);
            //         setARZoom([0.4, 1.2]);
            //     }
            // },
            // {
            //     label: "🗺️ Жер шарының географиялық картасы",
            //     onClick: () => { navigation.navigate(ROUTES.MAP, { title: "🗺️ Жер шарының географиялық картасы", uri: "file:///android_asset/html/lesson-2/world.html" }) }
            // }
        ],
        [
            // {
            //     label: "📱 Жер шары қабаттарының анимацияланған AR моделі",
            //     onClick: () => {
            //         setARUri("file:///android_asset/model/lesson-3/mantle.glb");
            //         setARAnimation("Animation");
            //         setARShow(true);
            //         setARZoom([0.3, 1]);
            //     }
            // },
            // {
            //     label: "📱 Жер шары қабаттарының AR моделі",
            //     onClick: () => {
            //         setARUri("file:///android_asset/model/lesson-3/mantle2.glb");
            //         setARAnimation(undefined);
            //         setARShow(true);
            //         setARZoom([0.3, 1]);
            //     }
            // },
            // {
            //     label: "📱 Жер шарының атмосфера қабатының AR моделі",
            //     onClick: () => {
            //         setARUri("file:///android_asset/model/lesson-3/atmosphere.glb");
            //         setARAnimation("Take 001");
            //         setARShow(true);
            //         setARZoom([0.3, 1]);
            //     }
            // }
        ],
        [
            // {
            //     label: "📱 Бактерия (алғашқы тірі организм) AR моделі",
            //     onClick: () => {
            //         setARUri("file:///android_asset/model/lesson-4/bacteria.glb");
            //         setARAnimation(undefined);
            //         setARShow(true);
            //         setARZoom([0.6, 1.4]);
            //     }
            // },
        ],
        [
            {
                label: "🗺️ Жер шарының политикалық картасы",
                onClick: () => { navigation.navigate(ROUTES.MAP, { title: "🗺️ Жер шарының политикалық картасы", uri: "file:///android_asset/html/lesson-5/countries.html" }) }
            },
            {
                label: "🗺️ Қазақстан картасы",
                onClick: () => { navigation.navigate(ROUTES.MAP, { title: "🗺️ Қазақстан картасы", uri: "file:///android_asset/html/lesson-5/kazakhstan.html" }) }
            }
        ],
        [
            {
                label: "🗺️ Құрлықтар картасы",
                onClick: () => { navigation.navigate(ROUTES.MAP, { title: "🗺️ Құрлықтар картасы", uri: "file:///android_asset/html/lesson-6/continents.html" }) }
            },
            {
                label: "🗺️ Мұхиттар картасы",
                onClick: () => { navigation.navigate(ROUTES.MAP, { title: "🗺️ Мұхиттар картасы", uri: "file:///android_asset/html/lesson-6/oceans.html" }) }
            }
        ],
        [
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
    const onAR = (link: string) => {
        Linking.openURL(`https://arvr.google.com/scene-viewer/1.0?file=${link}&mode=ar_preferred`).catch((err) => {
            Alert.alert('Қате', 'AR модельдің сілтемесі ашылмады.');
        });
    }

    return (
        <View style={{ flex: 1 }}>
            <ScrollView contentContainerStyle={{
                flexDirection: 'row',
                flexWrap: 'wrap',
                justifyContent: 'space-between',
                alignItems: 'stretch'
            }}>
                {LESSON_MATERIALS[lessonIndex].map((item, index) => (
                    <Pressable key={index} onPress={item.onClick} style={{ width: '46%', marginBottom: 20 }}>
                        <CardComponent isFlex>
                            <View style={{ flex: 1 }}>
                                <Text style={{ fontSize: FONT_SIZE.DEFAULT }}>{item.label}</Text>
                            </View>
                        </CardComponent>
                    </Pressable>
                ))}
            </ScrollView>
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