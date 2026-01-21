import {useEffect} from "react";
import {useNavigate} from "react-router-dom";
import {useCommon} from "./CommonProvider";

const NavigatorProvider = () => {
    const navigate = useNavigate();

    const common = useCommon();
    useEffect(() => {
        common.util.setNavigate(navigate);
    },[common.util, navigate])

    return null;
}

export default NavigatorProvider;