import Slider from "@react-native-community/slider";
import { Viro3DObject, ViroAmbientLight, ViroARScene, ViroARSceneNavigator } from "@reactvision/react-viro";
import { useState } from "react";
import { View } from "react-native";
import { COLORS } from "../../../core/config/template";
import { ViroScale, ViroRotation } from "@reactvision/react-viro/dist/components/Types/ViroUtils";

const ARScreen = ({ uri, animation }: { uri?: string, animation?: string }) => {
    // CONTROL
    const [rotation, setRotation] = useState([0, 0, 0]);
    const rotateObject = (newRotation: number) => {
        setRotation(prevRotation => {
            return [prevRotation[0], newRotation, prevRotation[2]];
        });
    };
    if (!uri) return;
    return (
        <View style={{ flex: 1 }}>
            <ViroARSceneNavigator
                autofocus={true}
                // @ts-ignore
                initialScene={{ scene: ARScene }}
                viroAppProps={{ rotation, uri, animation }}
            />
            <View style={{
                position: 'absolute',
                bottom: 20,
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
                    minimumTrackTintColor={COLORS.WHITE_DARK}
                    maximumTrackTintColor={COLORS.WHITE_DARK}
                    thumbTintColor={COLORS.BLUE}
                />
            </View>
        </View>
    );
}

export default ARScreen;

const ARScene = (props: any) => {
    // SCALE
    const [scale, setScale] = useState([0.4, 0.4, 0.4]);
    const handlePinch = (pinchState: any, pinchScale: any, source: any) => {
        if (pinchState !== 2) return;
        let newScale = scale[0] * pinchScale;
        newScale = Math.max(0.05, Math.min(1, newScale));
        setScale([newScale, newScale, newScale]);
    };

    return (
        <ViroARScene>
            <ViroAmbientLight color="#ffffff" intensity={500} />
            <Viro3DObject
                source={{ uri: props.arSceneNavigator.viroAppProps.uri }}
                type="GLB"
                position={[0, 0, -1]}
                scale={scale as ViroScale}
                rotation={props.arSceneNavigator.viroAppProps.rotation as ViroRotation}
                dragType="FixedToWorld"
                onDrag={() => { }}
                onPinch={handlePinch}
                animation={props.arSceneNavigator.viroAppProps.animation ? {
                    name: props.arSceneNavigator.viroAppProps.animation,
                    loop: true,
                    run: true
                } : undefined}
            />
        </ViroARScene>
    );
};