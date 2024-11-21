import { ROUTES } from "../../../core/route/routes";
import ButtonComponent from "../../shared/ui/ButtonComponent";

const StartComponent = ({ navigation }: { navigation: any }) => {
    return (
        <ButtonComponent
            title="Тақырыптар 📚"
            onClick={() => navigation.navigate(ROUTES.LESSONS)}
        />
    );
}

export default StartComponent;