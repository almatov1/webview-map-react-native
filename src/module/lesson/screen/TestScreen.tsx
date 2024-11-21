import { StackNavigationProp } from "@react-navigation/stack";
import { useEffect, useState } from "react";
import { Alert, Pressable, ScrollView, Text, View } from "react-native";
import { QUIZ } from "../../../core/config/quiz";
import { useProgress } from "../../account/store/progress";
import { ROUTES } from "../../../core/route/routes";
import CardComponent from "../../shared/ui/CardComponent";
import HoldButtonComponent from "../../shared/ui/HoldButtonComponent";
import { COLORS, FONT_SIZE } from "../../../core/config/template";
import CheckBox from "@react-native-community/checkbox";
import WrapperComponent from "../../shared/ui/WrapperComponent";

const TestScreen = ({ navigation, route }: { navigation: StackNavigationProp<any, any>, route: any }) => {
    // DEFINE
    const { title } = route.params;
    useEffect(() => {
        navigation.setOptions({
            headerTitle: title,
        });
    }, [navigation]);
    const { patchLesson } = useProgress();

    // QUIZ
    const [selectedAnswers, setSelectedAnswers] = useState<string[]>(
        new Array(QUIZ.length).fill("")
    );
    const handleOptionSelect = (index: number, option: string) => {
        const newAnswers = [...selectedAnswers];
        newAnswers[index] = option;
        setSelectedAnswers(newAnswers);
    };
    const calculateScore = () => {
        let correctAnswers = 0;
        selectedAnswers.forEach((answer, index) => {
            if (answer === QUIZ[index].correct_option) {
                correctAnswers++;
            }
        });
        navigation.navigate(ROUTES.HOME);
        Alert.alert('Тест аяқталды ✅s', `Нәтижесі: ${correctAnswers} сұраққа дұрыс жауап белгіленді.`);
        patchLesson(7, { finished: true, test: correctAnswers });
    };

    return (
        <WrapperComponent>
            <ScrollView>
                <CardComponent>
                    <View style={{ gap: 20 }}>
                        {QUIZ.map((questionData, index) => (
                            <View key={index}>
                                <Text style={{ marginBottom: 5, fontSize: FONT_SIZE.DEFAULT }}>
                                    {index + 1}. {questionData.question}
                                </Text>
                                {questionData.options.map((option, optionIndex) => (
                                    <Pressable key={optionIndex} style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 5 }} onPress={() => handleOptionSelect(index, option)}>
                                        <CheckBox
                                            value={selectedAnswers[index] === option}
                                            tintColors={{ true: COLORS.BLUE, false: '#d4d4d4' }}
                                            disabled={true}
                                        />
                                        <Text style={{ fontSize: FONT_SIZE.SMALL, width: 270 }}>{option}</Text>
                                    </Pressable>
                                ))}
                            </View>
                        ))}
                    </View>
                    <View style={{ marginTop: 40 }}>
                        <HoldButtonComponent
                            placeholder="Аяқтау"
                            onLongPress={calculateScore}
                        />
                    </View>
                </CardComponent>
            </ScrollView>
        </WrapperComponent>
    );
}

export default TestScreen;