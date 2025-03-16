import React from "react";
import {useLocation} from "react-router-dom";
import SamplePopup from "./popup/SamplePopup";
import useCommon from "../common/common";

const About = () => {
    console.error("About")
    const common = useCommon();
    return (
        <div>
            <h1>About Page</h1>
            <button onClick={() => common.navigate("/contact", {state:"1"})}>Go to Contact</button>
            <button
                onClick={() =>
                    common.popup.show(SamplePopup, { name: "John Doe" }) // SamplePopup 컴포넌트를 전달
                }
            >
                Show Popup
            </button>
        </div>
    )
};

export default About;
