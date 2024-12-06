import { Alert, Linking, Pressable, Text, View } from "react-native";
import CardComponent from "../../shared/ui/CardComponent";
import { FONT_SIZE } from "../../../core/config/template";
import { ROUTES } from "../../../core/route/routes";
import { ScrollView } from "react-native-gesture-handler";

const LessonComponent = ({ navigation }: { navigation: any }) => {
    // DEFINE
    const LESSON_MATERIALS = [
        {
            label: "📄 Анықтама",
            onClick: () => {
                navigation.navigate(ROUTES.INFO, {
                    title: "📄 Анықтама",
                    header: "🗺️ Жер бетін бейнелеу тәсілдері",
                    text: "Жер бетін бейнелеу тәсілдері — географиялық объектілер мен жер бедерін масштабта көрсетудің әртүрлі әдістері. Олар жерді зерттеу, картографиялау және бағдарлау үшін қолданылады.\n\nНегізгі тәсілдері: жоспар, карта, глобус, аэрофотосурет пен спутниктік түсірілімдер, сандық карталар (геоақпараттық жүйелер - GIS).\n\nБұл тәсілдер Жердің ерекшеліктерін зерттеу мен табиғат пен қоғам арасындағы байланысты түсінуге көмектеседі."
                })
            }
        },
        {
            label: "📹 Жер бетін бейнелеу тәсілдері",
            onClick: () => {
                navigation.navigate(ROUTES.VIDEO, {
                    title: "📹 Видеожазба",
                    link: "https://github.com/almatov1/assets-education-app-react-native/raw/refs/heads/main/assets/video/lesson5.mp4",
                    header: "Жер бетін бейнелеу тәсілдері",
                    text: "Жер бетін бейнелеу тәсілдері — географиялық объектілер мен жер бедерін масштабта көрсетудің әртүрлі әдістері."
                })
            }
        },
        {
            label: "📱 Глобустың AR моделі",
            onClick: () => onAR("https://github.com/almatov1/assets-education-app-react-native/raw/refs/heads/main/assets/model/lesson-5/globe.glb")
        },
        {
            label: "🗺️ Жер шарының политикалық картасы",
            onClick: () => {
                navigation.navigate(ROUTES.MAP, {
                    title: "🗺️ Жер шарының политикалық картасы",
                    link: "https://github.com/almatov1/assets-education-app-react-native/raw/refs/heads/main/assets/html/lesson-5/countries.html"
                })
            }
        },
        {
            label: "🗺️ Қазақстан картасы",
            onClick: () => {
                navigation.navigate(ROUTES.MAP, {
                    title: "🗺️ Қазақстан картасы",
                    link: "https://github.com/almatov1/assets-education-app-react-native/raw/refs/heads/main/assets/html/lesson-5/kazakhstan.html"
                })
            }
        }
    ];
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
                {LESSON_MATERIALS.map((item, index) => (
                    <Pressable key={index} onPress={item.onClick} style={{ width: '46%', marginBottom: 20 }}>
                        <CardComponent isFlex>
                            <View style={{ flex: 1 }}>
                                <Text style={{ fontSize: FONT_SIZE.DEFAULT }}>{item.label}</Text>
                            </View>
                        </CardComponent>
                    </Pressable>
                ))}
            </ScrollView>
        </View >
    );
}

export default LessonComponent;