import { Text, View } from "react-native";
import CardComponent from "../../shared/ui/CardComponent";
import { FONT_SIZE } from "../../../core/config/template";

const InfoComponent = () => {
    return (
        <View style={{ flex: 1 }}>
            <CardComponent>
                <View style={{ gap: 10 }}>
                    <Text style={{ fontSize: FONT_SIZE.DEFAULT }}>
                        ⚠️ Ақпарат
                    </Text>
                    <Text style={{ fontSize: FONT_SIZE.SMALL }}>
                        Мобильдік қосымша көмегімен әр тақырып бойынша AR модельдерімен, видеолмармен және тағы да басқа материалдармен таныса аласыздар.
                    </Text>
                </View>
            </CardComponent>
        </View>
    );
}

export default InfoComponent;