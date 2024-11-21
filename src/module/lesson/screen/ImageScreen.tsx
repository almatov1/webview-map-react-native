import { StackNavigationProp } from "@react-navigation/stack";
import { useEffect } from "react";
import WrapperComponent from "../../shared/ui/WrapperComponent";
import { Dimensions, Image, ScrollView } from "react-native";
import Zoom from "react-native-zoom-reanimated";

const ImageScreen = ({ navigation, route }: { navigation: StackNavigationProp<any, any>, route: any }) => {
    // DEFINE
    const { title, images } = route.params;
    useEffect(() => {
        navigation.setOptions({
            headerTitle: title,
        });
    }, [navigation]);
    const screenWidth = Dimensions.get("window").width;

    return (
        <WrapperComponent>
            <ScrollView>
                <Zoom
                    doubleTapConfig={{
                        defaultScale: 2
                    }}
                >
                    {images.map((item: any, index: number) => (
                        <Image
                            key={index}
                            source={item}
                            resizeMode="contain"
                            style={{
                                width: screenWidth,
                                height: 220,
                                marginBottom: index !== images.length - 1 ? 20 : 0
                            }}
                        />
                    ))}
                </Zoom>
            </ScrollView>
        </WrapperComponent>
    );
}

export default ImageScreen;