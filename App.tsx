import React from 'react';
import { Alert, SafeAreaView } from 'react-native';
import { WebView } from 'react-native-webview';
import { COUNTRIES } from './src/core/config/countries';

const App = () => {
  const handleMessage = (event: any) => {
    const countryName = event.nativeEvent.data;
    const country = COUNTRIES.find(item => item[countryName as keyof typeof item]);
    if (country) {
      const countryData = country[countryName as keyof typeof country];
      Alert.alert(countryData.name, `🗺️ Сіз ${countryData.name} мемлекетін таңдадыңыз!\n🏙️ Астанасы: ${countryData.capital}`, [
        { text: 'Құптау' },
      ]);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <WebView
        originWhitelist={['*']}
        source={{ uri: 'file:///android_asset/index.html' }}
        javaScriptEnabled={true}
        onMessage={handleMessage}
      />
    </SafeAreaView>
  );
};

export default App;
