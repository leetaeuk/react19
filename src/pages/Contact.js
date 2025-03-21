import React from "react";
import { useCommon } from "../providers/CommonProvider";
import SamplePopup from "./popup/SamplePopup";
import {useSelector} from "react-redux";
import store from "../store";
//import {useDispatch} from "react-redux";
//import {historyState} from "../store/historySlice";

const Contact = () => {
    console.error("Contact")
    const { common } = useCommon();
    //const dispatch = useDispatch();
    //console.warn(JSON.stringify(dispatch(historyState())))
    //const hist = useSelector((state) => state.history);
    //console.error(hist.arrHistory)
    console.warn(JSON.stringify(store.getState().history))

    return (
        <div>
            <h1>Contact Page</h1>
            <button onClick={() => common.locationBack("/")}>Go to Home</button>
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

export default Contact;
