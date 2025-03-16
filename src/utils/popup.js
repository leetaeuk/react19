import { useDispatch } from "react-redux";
import { showPopup, hidePopup } from "../store/popupSlice";

const usePopupHelper = () => {
    console.error("usePopupHelper")
    const dispatch = useDispatch();

    const displayPopup = (component, props = {}) => {
        dispatch(showPopup({ component, props })); // 컴포넌트와 추가 데이터 전달
    };

    const closePopup = () => {
        dispatch(hidePopup());
    };

    return {
        popup: {
            show: displayPopup,
            close: closePopup,
        },
    };
};

export default usePopupHelper;
