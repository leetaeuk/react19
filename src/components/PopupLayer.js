import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { hidePopup } from "../store/popupSlice";

const PopupLayer = () => {
    console.error("PopupLayer")
    const dispatch = useDispatch();
    const { isVisible, popupComponent: PopupComponent, popupProps } = useSelector(
        (state) => state.popup
    );

    if (!isVisible || !PopupComponent) return null;

    return (
        <div
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                zIndex: 1100,
            }}
            onClick={() => dispatch(hidePopup())}
        >
            <div
                style={{
                    backgroundColor: "white",
                    padding: "20px",
                    borderRadius: "8px",
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                }}
                onClick={(e) => e.stopPropagation()}
            >
                <PopupComponent {...popupProps} />
            </div>
        </div>
    );
};

export default PopupLayer;
