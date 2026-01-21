import useApis from "../hooks/useApis";
import useComs from "../hooks/useComs";
import React, {createContext, useContext, useMemo} from "react";

const CommonContext = createContext(null);

export const CommonProvider = React.memo(({ children }) => {

    const coms = useComs();
    const apis = useApis(coms);

    const common = useMemo(() => ({
        util: { ...coms },
        api: { ...apis },
    }), [coms, apis]);

    return (
        <CommonContext.Provider value={common}>
            {children}
        </CommonContext.Provider>
    );
});

export const useCommon = () => {
    return useContext(CommonContext)
};
