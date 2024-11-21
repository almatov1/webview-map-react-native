import { Alert, View } from "react-native";
import { COUNTRIES } from "../../../core/config/countries";
import WebView from "react-native-webview";
import { useEffect } from "react";
import { StackNavigationProp } from "@react-navigation/stack";

const MapScreen = ({ navigation, route }: { navigation: StackNavigationProp<any, any>, route: any }) => {
    // DEFINE
    const { title, uri } = route.params;
    useEffect(() => {
        navigation.setOptions({
            headerTitle: title,
        });
    }, [navigation]);
    const handleMessage = (event: any) => {
        console.log(event.nativeEvent.data)
        const value = JSON.parse(event.nativeEvent.data);
        if (value.name === 'countries') {
            const countryName = value.value;
            const country = COUNTRIES.find(item => item[countryName as keyof typeof item]);
            if (country) {
                const countryData = country[countryName as keyof typeof country];
                Alert.alert(countryData.name, `🗺️ Сіз ${countryData.name} мемлекетін таңдадыңыз!\n🏙️ Астанасы: ${countryData.capital}`, [
                    { text: 'Құптау' },
                ]);
            }
        }
    };

    return (
        <View style={{ flex: 1 }}>
            <WebView
                originWhitelist={['*']}
                source={{ uri: uri }}
                javaScriptEnabled={true}
                onMessage={handleMessage}
            />
        </View>
    );
}

export default MapScreen;