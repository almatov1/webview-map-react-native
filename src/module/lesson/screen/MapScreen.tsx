import { Alert, View } from "react-native";
import { COUNTRIES } from "../../../core/config/countries";
import WebView from "react-native-webview";
import { useEffect, useState } from "react";
import { StackNavigationProp } from "@react-navigation/stack";
import { KAZAKHSTAN } from "../../../core/config/kazakhstan";

const MapScreen = ({ navigation, route }: { navigation: StackNavigationProp<any, any>, route: any }) => {
    // DEFINE
    const { title, link } = route.params;
    const [htmlContent, setHtmlContent] = useState<string | null>(null);
    useEffect(() => {
        navigation.setOptions({
            headerTitle: title,
        });
    }, [navigation]);
    const handleMessage = (event: any) => {
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
        else if (value.name === 'kazakhstan') {
            const regionName = value.value;
            const region = KAZAKHSTAN.find(item => item[regionName as keyof typeof item]);
            if (region) {
                const regionData = region[regionName as keyof typeof region];
                Alert.alert(regionData.name, `🗺️ Сіз ${regionData.name} облысын таңдадыңыз!\n🏙️ Орталығы: ${regionData.center}`, [
                    { text: 'Құптау' },
                ]);
            }
        }
    };
    useEffect(() => {
        const fetchHtml = async () => {
            const response = await fetch(link);
            const html = await response.text();
            setHtmlContent(html);
        };

        fetchHtml();
    }, []);

    if (!htmlContent) return null;
    return (
        <View style={{ flex: 1 }}>
            <WebView
                originWhitelist={['*']}
                source={{ html: htmlContent }}
                javaScriptEnabled={true}
                onMessage={handleMessage}
            />
        </View>
    );
}

export default MapScreen;