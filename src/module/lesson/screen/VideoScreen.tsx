import { StackNavigationProp } from "@react-navigation/stack";
import { useEffect } from "react";
import { View } from "react-native";
import Video from "react-native-video";

const VideoScreen = ({ navigation, route }: { navigation: StackNavigationProp<any, any>, route: any }) => {
    // DEFINE
    const { title, background } = route.params;
    useEffect(() => {
        navigation.setOptions({
            headerTitle: title,
        });
    }, [navigation]);

    return (
        <View style={{ flex: 1 }}>
            <Video
                source={background}
                controls={true}
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    bottom: 0,
                    right: 0
                }}
            />
        </View>
    );
}

export default VideoScreen;