import React from "react";

const SamplePopup = ({ name }) => {
    console.error("SamplePopup")
    return (
        <div>
            <h2>Sample Popup</h2>
            <p>Hello, {name}!</p>
        </div>
    );
};

export default SamplePopup;