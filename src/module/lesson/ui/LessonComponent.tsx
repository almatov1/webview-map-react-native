import { Alert, Linking, Pressable, Text, View } from "react-native";
import CardComponent from "../../shared/ui/CardComponent";
import HoldButtonComponent from "../../shared/ui/HoldButtonComponent";
import { FONT_SIZE } from "../../../core/config/template";
import { useProgress } from "../../account/store/progress";
import { ROUTES } from "../../../core/route/routes";
import { ScrollView } from "react-native-gesture-handler";
import { CommonActions } from '@react-navigation/native';

const LessonComponent = ({ navigation, lessonIndex }: { navigation: any, lessonIndex: number }) => {
    // DEFINE
    const { progress, patchLesson } = useProgress();
    const LESSON_MATERIALS = [
        [
            {
                label: "📄 Анықтама",
                onClick: () => {
                    navigation.navigate(ROUTES.IMAGE, {
                        title: "📄 Анықтама", images: [
                            require('../../../core/assets/img/lesson-1.jpg'),
                            require('../../../core/assets/img/lesson-1-1.jpg')
                        ]
                    })
                }
            },
            {
                label: "🎧 Аудиожазба",
                onClick: () => {
                    navigation.navigate(ROUTES.VIDEO, { title: "🎧 Аудиожазба", background: require('../../../core/assets/audio/lesson-1.mp4'), header: "Бұл аудиожазба", text: "Для добавления элемента описывающего аудио файл на страницу, используется тег <audio>. Нужно обратить внимание, что не все форматы аудио файлов поддерживаются браузерами. В теге необходимо обязательно определить путь к файлу, посредством атрибута src или вложенным тегом <source>." })
                }
            },
            {
                label: "📱 Макроәлем AR моделі",
                onClick: () => onAR("https://github.com/almatov1/education-app-react-native/raw/refs/heads/main/android/app/src/main/assets/model/lesson-1/solar.glb")
            },
            {
                label: "📱 Микроәлем AR моделі",
                onClick: () => onAR("https://github.com/almatov1/education-app-react-native/raw/refs/heads/main/android/app/src/main/assets/model/lesson-1/atom.glb")
            },
            {
                label: "📱 Телескоптың AR моделі",
                onClick: () => onAR("https://github.com/almatov1/education-app-react-native/raw/refs/heads/main/android/app/src/main/assets/model/lesson-1/telescope.glb")
            },
            {
                label: "📱 Микроскоптың AR моделі",
                onClick: () => onAR("https://github.com/almatov1/education-app-react-native/raw/refs/heads/main/android/app/src/main/assets/model/lesson-1/microscope.glb")
            }
        ],
        [
            {
                label: "🎧 Аудиожазба",
                onClick: () => {
                    navigation.navigate(ROUTES.VIDEO, { title: "🎧 Аудиожазба", background: require('../../../core/assets/audio/lesson-2.mp4') })
                }
            },
            {
                label: "📹 Табиғи құбылыстар",
                onClick: () => { navigation.navigate(ROUTES.VIDEO, { title: "📹 Табиғи құбылыстар", background: require('../../../core/assets/video/lesson-2.mp4') }) }
            },
            {
                label: "📱 Жер шарының AR моделі",
                onClick: () => onAR("https://github.com/almatov1/education-app-react-native/raw/refs/heads/main/android/app/src/main/assets/model/lesson-2/earth.glb")
            },
            {
                label: "🗺️ Жер шарының географиялық картасы",
                onClick: () => { navigation.navigate(ROUTES.MAP, { title: "🗺️ Жер шарының географиялық картасы", uri: "file:///android_asset/html/lesson-2/world.html" }) }
            }
        ],
        [
            {
                label: "📄 Анықтама",
                onClick: () => {
                    navigation.navigate(ROUTES.IMAGE, {
                        title: "📄 Анықтама", images: [
                            require('../../../core/assets/img/lesson-3.jpg'),
                            require('../../../core/assets/img/lesson-3-1.jpg')
                        ]
                    })
                }
            },
            {
                label: "🎧 Аудиожазба",
                onClick: () => {
                    navigation.navigate(ROUTES.VIDEO, { title: "🎧 Аудиожазба", background: require('../../../core/assets/audio/lesson-3.mp4') })
                }
            },
            {
                label: "📱 Жер шары қабаттарының анимацияланған AR моделі",
                onClick: () => onAR("https://github.com/almatov1/education-app-react-native/raw/refs/heads/main/android/app/src/main/assets/model/lesson-3/mantle.glb")
            },
            {
                label: "📱 Жер шары қабаттарының AR моделі",
                onClick: () => onAR("https://github.com/almatov1/education-app-react-native/raw/refs/heads/main/android/app/src/main/assets/model/lesson-3/mantle2.glb")
            },
            {
                label: "📱 Жер шарының атмосфера қабатының AR моделі",
                onClick: () => onAR("https://github.com/almatov1/education-app-react-native/raw/refs/heads/main/android/app/src/main/assets/model/lesson-3/atmosphere.glb")
            }
        ],
        [
            {
                label: "📱 Бактерия (алғашқы тірі организм) AR моделі",
                onClick: () => onAR("https://github.com/almatov1/education-app-react-native/raw/refs/heads/main/android/app/src/main/assets/model/lesson-4/bacteria.glb")
            },
        ],
        [
            {
                label: "📄 Анықтама",
                onClick: () => {
                    navigation.navigate(ROUTES.IMAGE, {
                        title: "📄 Анықтама", images: [
                            require('../../../core/assets/img/lesson-5.jpg'),
                            require('../../../core/assets/img/lesson-5-1.jpg')
                        ]
                    })
                }
            },
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
                label: "📄 Анықтама",
                onClick: () => {
                    navigation.navigate(ROUTES.IMAGE, {
                        title: "📄 Анықтама", images: [
                            require('../../../core/assets/img/lesson-6.jpg')
                        ]
                    })
                }
            },
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
            {
                label: "📱 Ежелгі қаланың AR моделі",
                onClick: () => onAR("https://github.com/almatov1/education-app-react-native/raw/refs/heads/main/android/app/src/main/assets/model/lesson-7/ancient.glb")
            },
            {
                label: "📱 Қазіргі Шанхай қаласының AR моделі",
                onClick: () => onAR("https://github.com/almatov1/education-app-react-native/raw/refs/heads/main/android/app/src/main/assets/model/lesson-7/city.glb")
            },
        ],
        [
            {
                label: "✏️ Бөлім бойынша қорытынды тест",
                onClick: () => { navigation.navigate(ROUTES.TEST, { title: "Бөлім бойынша қорытынды тест" }) }
            },
        ]
    ];
    const onFinished = async () => {
        patchLesson(lessonIndex, { finished: true });
        Alert.alert('Құттықтаймыз!', 'Тақырып сәтті өтілді ✅');
        navigation.dispatch(
            CommonActions.reset({
                index: 0,
                routes: [{ name: ROUTES.HOME }],
            })
        );
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