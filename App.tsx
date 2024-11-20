import React, { useState } from 'react';
import { Alert, Button, SafeAreaView, View } from 'react-native';
import { WebView } from 'react-native-webview';
import { COUNTRIES } from './src/core/config/countries';
import { Viro3DObject, ViroAmbientLight, ViroARScene, ViroARSceneNavigator } from '@reactvision/react-viro';
import { ViroRotation, ViroScale } from '@reactvision/react-viro/dist/components/Types/ViroUtils';
import Slider from '@react-native-community/slider';

const App = () => {
  // index
  const [index, setIndex] = useState(0);

  // map 
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

  // ar
  const [rotation, setRotation] = useState([0, 0, 0]);
  const [sceneKey, setSceneKey] = useState(0);
  const rotateObject = (newRotation: number) => {
    setRotation(prevRotation => {
      return [prevRotation[0], newRotation, prevRotation[2]];
    });
  };
  const resetObject = () => { setSceneKey(prevKey => prevKey + 1) };


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
          : <View style={{ flex: 1 }}>
            <ViroARSceneNavigator
              key={sceneKey}
              autofocus={true}
              // @ts-ignore
              initialScene={{ scene: ARScene }}
              viroAppProps={{ rotation }}
              style={{ flex: 1 }}
            />
            <View style={{
              position: 'absolute',
              bottom: 80,
              left: 0,
              right: 0,
              padding: 20
            }}>
              <Slider
                minimumValue={-180}
                maximumValue={180}
                step={1}
                value={rotation[1]}
                onValueChange={rotateObject}
                minimumTrackTintColor="#FFFFFF"
                maximumTrackTintColor="#000000"
                thumbTintColor="#FF6347"
              />
            </View>
          </View>
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


const ARScene = (props: any) => {
  // SCALE
  const [scale, setScale] = useState([0.4, 0.4, 0.4]);
  const handlePinch = (pinchState: any, pinchScale: any, source: any) => {
    if (pinchState !== 2) return;
    let newScale = scale[0] * pinchScale;
    newScale = Math.max(0.05, Math.min(1, newScale));
    setScale([newScale, newScale, newScale]);
  };

  console.log(props)

  return (
    <ViroARScene>
      <ViroAmbientLight color="#ffffff" intensity={500} />
      <Viro3DObject
        source={{ uri: 'file:///android_asset/solar.glb' }}
        type="GLB"
        position={[0, -.1, -1]}
        scale={scale as ViroScale}
        rotation={props.arSceneNavigator.viroAppProps.rotation as ViroRotation}
        dragType="FixedToWorld"
        onDrag={() => { }}
        onPinch={handlePinch}
        animation={{
          name: "Default Take",
          loop: true,
          run: true
        }}
      />
    </ViroARScene>
  );
};