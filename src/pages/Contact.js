import React from "react";
import useCommon from "../common/common";
import SamplePopup from "./popup/SamplePopup";

const Contact = () => {
    console.error("Contact")
    const common = useCommon();
    return (
        <div>
            <h1>Contact Page</h1>
            <button onClick={() => common.navigateBack("/home")}>Go to Home</button>
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

export default Contact;
