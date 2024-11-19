import React, { useState } from 'react';
import { Alert, Button, SafeAreaView, View } from 'react-native';
import { WebView } from 'react-native-webview';
import { COUNTRIES } from './src/core/config/countries';
import { Viro3DObject, ViroAmbientLight, ViroARScene, ViroARSceneNavigator } from '@reactvision/react-viro';
import { ViroRotation } from '@reactvision/react-viro/dist/components/Types/ViroUtils';

const App = () => {
  const [index, setIndex] = useState(0);
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
      {
        index === 0
          ? <WebView
            originWhitelist={['*']}
            source={{ uri: 'file:///android_asset/index.html' }}
            javaScriptEnabled={true}
            onMessage={handleMessage}
          />
          : <ViroARSceneNavigator
            autofocus={true}
            initialScene={{ scene: ARScene }}
            style={{ flex: 1 }}
          />
      }
      <View style={{
        position: 'absolute',
        bottom: 0,
        width: '100%',
        display: 'flex',
        flexDirection: 'row'
      }}>
        <View style={{ flex: 1 }}><Button onPress={() => setIndex(0)} title='MAP' /></View>
        <View style={{ flex: 1 }}><Button onPress={() => setIndex(1)} title='AR' /></View>
      </View>
    </SafeAreaView>
  );
};

export default App;

const ARScene = () => {
  const [objectRotation, setObjectRotation] = useState([0, 0, 0]);
  const handleRotate = (rotateState: any, rotationFactor: any, source: any) => {
    console.log(rotateState, rotationFactor, source);

    // if (rotateState !== 2) return;
    // setObjectRotation((prevRotation) => {
    //   return [
    //     prevRotation[0],
    //     prevRotation[1] - rotationFactor * 0.3,
    //     prevRotation[2]
    //   ];
    // });
  };


  return (
    <ViroARScene>
      <ViroAmbientLight color="#ffffff" intensity={500} />
      <Viro3DObject
        animation={{ name: 'rotate', loop: true, run: true }}
        source={{ uri: 'file:///android_asset/Microscope.glb' }}
        type="GLB"
        position={[0, -.1, -1]}
        scale={[1, 1, 1]}
        rotation={objectRotation as ViroRotation}
        onRotate={handleRotate}
        dragType="FixedToWorld"
      />
    </ViroARScene>
  );
};