import React from "react";
import SamplePopup from "./popup/SamplePopup";
import { useCommon } from "../providers/CommonProvider";
import store from "../store";

const About = () => {
    console.error("About")
    const { common } = useCommon();
    //const dispatch = useDispatch();
    //console.warn(JSON.stringify(dispatch(historyState())))
    //const hist = useSelector((state) => state.history);
    //console.error(hist.arrHistory)
    console.warn(JSON.stringify(store.getState().history))

    return (
        <div>
            <h1>About Page</h1>
            <button onClick={() => common.location("/contact", {state:"1"})}>Go to Contact</button>
            <button
                onClick={() =>
                    common.openPopup(SamplePopup, { name: "John Doe" }) // SamplePopup 컴포넌트를 전달
                }
            >
                Show Popup
            </button>
        </div>
    )
};

export default About;
