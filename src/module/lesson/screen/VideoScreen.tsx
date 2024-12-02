import { StackNavigationProp } from "@react-navigation/stack";
import { useEffect } from "react";
import { Text, View } from "react-native";
import VideoPlayer from 'react-native-video-player';
import { FONT_SIZE } from "../../../core/config/template";
import CardComponent from "../../shared/ui/CardComponent";
import WrapperComponent from "../../shared/ui/WrapperComponent";

const VideoScreen = ({ navigation, route }: { navigation: StackNavigationProp<any, any>, route: any }) => {
    // DEFINE
    const { title, link, header, text } = route.params;
    useEffect(() => {
        navigation.setOptions({
            headerTitle: title,
        });
    }, [navigation]);

    return (
        <View style={{ flex: 1 }}>
            <VideoPlayer source={{ uri: link }} showDuration={true} />
            <WrapperComponent>
                <View style={{ gap: 10 }}>
                    <CardComponent>
                        <Text style={{ fontSize: FONT_SIZE.LARGE }}>ℹ️ {header}</Text>
                    </CardComponent>
                    <CardComponent>
                        <Text style={{ fontSize: FONT_SIZE.DEFAULT }}>{text}</Text>
                    </CardComponent>
                </View>
            </WrapperComponent>
        </View>
    );
}

export default VideoScreen;