import {useDispatch} from "react-redux";
import popupSlice from "../store/popupSlice";
import historySlice from "../store/historySlice";
import dialogSlice from "../store/dialogSlice";
import groundPopupSlice from "../store/groundPopupSlice";
import store from "../store";
import headerSlice from "../store/headerSlice";
import loadingSlice from "../store/loadingSlice";
import footerSlice from "../store/footerSlice";
import {useCallback, useMemo, useRef} from "react";

/**
 * 공통함수 모음
 */
const useComs = () => {
    console.error("useComs")
    const dispatch = useDispatch();
    // let navigate = null;
    // const setNavigate = ((nav) => {
    //     navigate = nav;
    // });
    const navigateRef = useRef(null);
    const setNavigate = useCallback((nav) => {
        navigateRef.current = nav;
    }, []);

    /**
     * 페이지 이동
     *  - 페이지 이동시 스택을 하나씩 쌓는다(hostory 개념)
     * @param svcId
     * @param paramJson
     * @param options
     * @param isBack
     */
    //const location = (svcId, paramJson, options, isBack = {}) => {
    const location = useCallback((svcId, paramJson, options, isBack = {}) => {
        let currentPageId   = window.location.pathname;
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
            dispatch(historySlice.actions.change({ svcId, paramJson, options })); // 컴포넌트와 추가 데이터 전달

            //dispatch(goToPage({ svcId, paramJson }));
            // navigate(svcId, paramJson);
            navigateRef.current?.(svcId, paramJson);
        }
        // 정상 location의 경우 히스토리 추가
        else
        {
            // 히스토리 추가(현재페이지정보, 이동할페이지정보, 파라미터정보, 옵션)
            //history.add(currentPageId, svcId, paramJson, options);
            dispatch(historySlice.actions.add({ currentPageId, svcId, paramJson, options })); // 컴포넌트와 추가 데이터 전달

            //dispatch(goToPage({ svcId, paramJson }));
            //navigate(svcId, paramJson);
            navigateRef.current?.(svcId, paramJson);
        }
    }, [dispatch]);

    /**
     * 뒤로가기시 호출
     *  - 단순 뒤로가기는 스택을 맨 마지막에서 하나만 제거하고 해당 페이지로 이동
     *  - 뒤로가기 호출시 특정 페이지를 지정하면 해당 페이지의 아이디를 찾을 때 까지 스택을 제거하고 이동
     *    해당 페이지 아이디를 못 찾는 경우는 모든 스택을 지우고 홈으로 이동
     *  - 완료페이지나 전체메뉴 또는 스택을 삭제하면서 페이지 이동이 필요한 경우도 해당 함수를 사용할 것
     * @param svcId
     * @param paramJson
     * @param options
     * @param isBack
     */
    //const locationBack = (svcId, paramJson, options, isBack = {}) => {
    const locationBack = useCallback((svcId, paramJson, options, isBack = {}) => {
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
            dispatch(historySlice.actions.removeToSvcId({ svcId })); // 컴포넌트와 추가 데이터 전달
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
            location(svcId);
        }
        // 서비스 아이디가 없는 경우(한단계 이전으로 돌아가는 경우)
        else
        {
            // 히스토리정보가 1개 이상 존재하는 경우
            const hist = store.getState().history;
            const historySize = hist.arrHistory.length;
            if( historySize > 0 )
            {
                // 맨 마지막 히스토리 1개만 삭제 후 이전페이지 정보 세팅
                //dispatch(historySlice.actions.pop());

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
                location("/");
            }
        }
    }, [dispatch, location]);

    /**
     * 레이어팝업창 열기
     * @param component
     * @param props
     */
    //const openPopup = (component, props = {}) => {
    const openPopup = useCallback((component, props = {}) => {
        dispatch(popupSlice.actions.showPopup({ component, props })); // 컴포넌트와 추가 데이터 전달
    }, [dispatch]);

    /**
     * 레이어팝업창 닫기
     * @param props
     */
    //const closePopup = (props = {}) => {
    const closePopup = useCallback((props = {}) => {
        dispatch(popupSlice.actions.hidePopup({ props }));
    }, [dispatch]);

    /**
     * 다이얼로그 열기
     * @param props
     */
    //const openDialog = (props = {}) => {
    const openDialog = useCallback((props = {}) => {
        dispatch(dialogSlice.actions.showDialog({ props })); // 컴포넌트와 추가 데이터 전달
    }, [dispatch]);

    /**
     * 다이얼로그 닫기
     * @param props
     */
    //const closeDialog = (props = {}) => {
    const closeDialog = useCallback((props = {}) => {
        dispatch(dialogSlice.actions.hideDialog({ props }));
    }, [dispatch]);

    /**
     * 그라운드팝업 열기
     * @param component
     * @param props
     */
    //const openGroundPopup = (component, props = {}) => {
    const openGroundPopup = useCallback((component, props = {}) => {
        dispatch(groundPopupSlice.actions.showGroundPopup({ component, props })); // 컴포넌트와 추가 데이터 전달
    }, [dispatch]);

    /**
     * 그라운드팝업 닫기
     * @param component
     * @param props
     */
    //const closeGroundPopup = (component, props = {}) => {
    const closeGroundPopup = useCallback((component, props = {}) => {
        dispatch(groundPopupSlice.actions.hideGroundPopup({ props }));
    }, [dispatch]);

    /**
     * 상단헤더정보 변경
     * @param props
     */
    //const setHeader = (props) => {
    const setHeader = useCallback((props) => {
        // 상단헤더 노출여부 체크(default : show)
        if( props.isShow === undefined )
        {
            props.isShow = true;
        }

        dispatch(headerSlice.actions.headerChange(props));
    }, [dispatch]);
    //const setFooter = (props) => {
    const setFooter = useCallback((props) => {
        // 상단헤더 노출여부 체크(default : show)
        if( props.isShow === undefined )
        {
            props.isShow = true;
        }

        dispatch(footerSlice.actions.footerChange(props));
    }, [dispatch]);

    //const setLoading = (props) => {
    const setLoading = useCallback((props) => {
        dispatch(loadingSlice.actions.loadingChange(props));
    }, [dispatch]);

    return useMemo(() => ({
        setNavigate,location,locationBack,
        openPopup,closePopup,openDialog,closeDialog,openGroundPopup,closeGroundPopup,
        setHeader,setFooter,setLoading
    }), [
        setNavigate,location,locationBack,
        openPopup,closePopup,openDialog,closeDialog,openGroundPopup,closeGroundPopup,
        setHeader,setFooter,setLoading,
    ]);
};

export default useComs;