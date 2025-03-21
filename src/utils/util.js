import {useDispatch} from "react-redux";
import {useLocation, useNavigate} from "react-router-dom";
import {hidePopup, showPopup} from "../store/popupSlice";
import {historyAdd, historyChange, historyRemoveFindSvcId, historyPop} from "../store/historySlice";
import store from "../store";

const useUtils = () => {
    console.error("useUtils")
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const loc = useLocation();

    const location = (svcId, paramJson, options, isBack = {}) => {
        let currentPageId   = loc.pathname;
        let isHashChange    = false;

        if( options != null )
        {
            // 페이지 로케이션 여부
            if( options.isHashChange === true )
            {
                isHashChange = true;
            }
        }

        // 뒤로가기 처리시 hash정보가 남아있으면 show 처리만 한다.
        if( isHashChange )
        {
        }

        // 뒤로가기로 들어온 경우 히스토리가 존재하면 히스토리값만 변경
        if( isBack === true )
        {
            // 히스토리 변경(현재페이지정보, 이동할페이지정보, 파라미터정보, 옵션)
            // Redux 상태 업데이트와 실제 라우팅을 분리
            //history.change(svcId, paramJson, options);
            dispatch(historyChange({ svcId, paramJson, options })); // 컴포넌트와 추가 데이터 전달

            //dispatch(goToPage({ svcId, paramJson }));
            navigate(svcId, paramJson);
        }
        // 정상 location의 경우 히스토리 추가
        else
        {
            // 히스토리 추가(현재페이지정보, 이동할페이지정보, 파라미터정보, 옵션)
            //history.add(currentPageId, svcId, paramJson, options);
            dispatch(historyAdd({ currentPageId, svcId, paramJson, options })); // 컴포넌트와 추가 데이터 전달

            //dispatch(goToPage({ svcId, paramJson }));
            navigate(svcId, paramJson);
        }
    };

    /**
     * 뒤로가기
     * @param svcId
     * @param options
     */
    const locationBack = (svcId, paramJson, options, isBack = {}) => {
        /*
        let pageInfo = DPT.com.getCurrentPageInfo();

        // 팝업이 떠있는 상태에서 뒤로가기를 눌렀을 경우에는 팝업을 닫아준다.
        if( pageInfo.PAGE_TYPE == "popup" )
        {
            //DPF.com.closePopup();
            return;
        }
        */

        // 서비스 아이디가 존재하는 경우(여러단계를 건너띄고 back하는 경우)
        if( svcId )
        {
            // 넘겨준 서비스아이디를 찾을때까지 히스토리 array를 search한 후 삭제하고 찾은 정보를 리턴
            //let lastSvcInfo = history.removeFindSvcId(svcId);
            //let lastSvcInfo = dispatch(historyRemoveFindSvcId({ svcId })); // 컴포넌트와 추가 데이터 전달

            dispatch(historyRemoveFindSvcId({ svcId })); // 컴포넌트와 추가 데이터 전달
            //console.error(hist)
            //const lastSvcInfo = (state) => state.history.svcInfo;
            //const lastSvcInfo = hist.svcInfo;
            //const lastSvcInfo = {};
            const hist = store.getState().history;
            let lastSvcInfo = {};
            if( hist.arrHistory.length > 0 )
            {
                lastSvcInfo = hist.arrHistory[hist.arrHistory.length-1];
            }

            let param = {};
            let opt   = {};
            if( lastSvcInfo !== null && lastSvcInfo !== undefined && Object.keys(lastSvcInfo).length > 0 )
            {
                param = lastSvcInfo.PARAMETER;
                if( paramJson )
                {
                    param = paramJson;
                }

                opt = lastSvcInfo.OPTIONS;
                if( options )
                {
                    opt = options;
                }
            }

            // 페이지이동
            location(svcId, param, opt, true);
        }
        // 서비스 아이디가 없는 경우(한단계 이전으로 돌아가는 경우)
        else
        {
            // 히스토리정보가 1개 이상 존재하는 경우
            const hist = store.getState().history;
            const historySize = hist.arrHistory.length;
            console.error(historySize)
            if( historySize > 0 )
            {
                // 맨 마지막 히스토리 1개만 삭제 후 이전페이지 정보 세팅
                dispatch(historyPop());

                let afterPopSvcInfo = {};
                if( hist.arrHistory.length > 0 )
                {
                    afterPopSvcInfo = hist.arrHistory[hist.arrHistory.length-1];
                }

                // 이전으로 갈 정보가 없으면 메인화면으로 이동처리
                if( afterPopSvcInfo === null || afterPopSvcInfo === undefined || Object.keys(afterPopSvcInfo).length === 0 )
                {
                    // 메인페이지 이동
                    //goMain();
                    location("/");
                }
                else
                {
                    // 이전페이지 이동
                    location(afterPopSvcInfo.SVC_ID, afterPopSvcInfo.PARAMETER, afterPopSvcInfo.OPTIONS, true);
                }
            }
            // 히스토리정보가 없는경우는 메인으로 이동
            else
            {
                // 메인페이지 이동
                //goMain();
                location("/");
            }
        }
    };
    const openPopup = (component, props = {}) => {
        dispatch(showPopup({ component, props })); // 컴포넌트와 추가 데이터 전달
    }
    const closePopup = () => {
        dispatch(hidePopup());
    };

    return {
        location,
        locationBack,
        openPopup,
        closePopup,
    };
};

export default useUtils;