import { useDispatch } from "react-redux";
import {useLocation, useNavigate} from "react-router-dom";
import * as history from "../common/history";

const useUtils = () => {
    console.error("useUtils")
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();

    const navigateTo = (svcId, paramJson, options, isBack = {}) => {
        let currentPageId   = location.pathname;
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
            history.change(svcId, paramJson, options);
            //dispatch(goToPage({ svcId, paramJson }));
            navigate(svcId, paramJson);
        }
        // 정상 location의 경우 히스토리 추가
        else
        {
            // 히스토리 추가(현재페이지정보, 이동할페이지정보, 파라미터정보, 옵션)
            history.add(currentPageId, svcId, paramJson, options);
            //dispatch(goToPage({ svcId, paramJson }));
            navigate(svcId, paramJson);
        }
    };

    /**
     * 뒤로가기
     * @param svcId
     * @param options
     */
    const navigateBack = (svcId, paramJson, options, isBack = {}) => {
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
            let lastSvcInfo = history.removeFindSvcId(svcId);

            let param = {};
            let opt   = {};
            if( lastSvcInfo !== null && lastSvcInfo !== undefined )
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
            navigateTo(svcId, param, opt, true);
        }
        // 서비스 아이디가 없는 경우(한단계 이전으로 돌아가는 경우)
        else
        {
            // 히스토리정보가 1개 이상 존재하는 경우
            if( history.getHistorySize() > 0 )
            {
                // 맨 마지막 히스토리 1개만 삭제 후 이전페이지 정보 세팅
                let afterPopSvcInfo = history.pop();

                // 이전으로 갈 정보가 없으면 메인화면으로 이동처리
                if( afterPopSvcInfo === null || afterPopSvcInfo === undefined )
                {
                    // 메인페이지 이동
                    //goMain();
                    navigateTo("/");
                }
                else
                {
                    // 이전페이지 이동
                    navigateTo(afterPopSvcInfo.SVC_ID, afterPopSvcInfo.PARAMETER, afterPopSvcInfo.OPTIONS, true);
                }
            }
            // 히스토리정보가 없는경우는 메인으로 이동
            else
            {
                // 메인페이지 이동
                //goMain();
                navigateTo("/");
            }
        }
    };

    return {
        navigate: navigateTo,
        navigateBack: navigateBack,
    };
};

export default useUtils;