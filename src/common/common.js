import useUtils from "../utils/util";
import usePopupHelper from "../utils/popup";

const useCommon = () => ({
    ...useUtils(),       // util.js의 navigate 관련 함수 통합
    ...usePopupHelper(), // popup.js의 popup 관련 함수 통합
});

export default useCommon;
