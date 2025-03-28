import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {useCommon} from "./CommonProvider";

const NavigatorProvider = () => {
    const navigate = useNavigate();

    const common = useCommon();
    useEffect(() => {
        common.util.setNavigate(navigate);
    },[common])

    return null;
}

export default NavigatorProvider;