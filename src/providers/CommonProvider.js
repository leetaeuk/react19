import useApis from "../hooks/useApis";
import useComs from "../hooks/useComs";
import {createContext, useContext, useMemo} from "react";

const CommonContext = createContext(null);

export const CommonProvider = ({ children }) => {
    console.error("CommonProvider")
    const apis = useApis();
    const coms = useComs();

    const common = useMemo(() => {
        return {
            api  : {...apis},
            util : {...coms},
        };
    }, []);

    console.error("CommonProvider", common)
    return (
        <CommonContext.Provider value={common}>
            {children}
        </CommonContext.Provider>
    );
}

export const useCommon = () => {
    return useContext(CommonContext);
};