import { StackNavigationProp } from "@react-navigation/stack";
import { useEffect } from "react";
import WrapperComponent from "../../shared/ui/WrapperComponent";
import { Dimensions, Image, ScrollView } from "react-native";
import { BORDER_RADIUS } from "../../../core/config/template";

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
            <ScrollView contentContainerStyle={{
                gap: 20
            }}>
                {images.map((item: any, index: number) => (
                    <Image
                        key={index}
                        source={item}
                        resizeMode="contain"
                        style={{
                            width: screenWidth,
                            height: 220,
                            borderRadius: BORDER_RADIUS.DEFAULT
                        }}
                    />
                ))}
            </ScrollView>
        </WrapperComponent>
    );
}

export default ImageScreen;