import useUtils from "../utils/util";
import {createContext, useContext, useMemo} from "react";

const CommonContext = createContext(null);

export const CommonProvider = ({ children }) => {
    const utils = useUtils();

    const common = useMemo(() => {
        return {
            ...utils,
        };
    }, [utils]);

    return (
        <CommonContext.Provider value={{common}}>
            {children}
        </CommonContext.Provider>
    );
}

export const useCommon = () => {
    return useContext(CommonContext);
}