import { createSlice } from "@reduxjs/toolkit";

const historySlice = createSlice({
    name: "history",
    initialState: {
        arrHistory: [], // 팝업에 전달할 추가 데이터 저장
    },
    reducers: {
        add: (state, action) => {
            state.arrHistory.push({
                CURRENT_PAGE_ID    : action.payload.currentPageId,
                SVC_ID             : action.payload.svcId,
                PARAMETER          : action.payload.paramJson,
                OPTIONS            : action.payload.options
            });
        },
        pop: (state, action) => {
            state.arrHistory.pop();

            if( state.arrHistory.length > 0 )
            {
                return state.arrHistory[state.arrHistory.length-1];
            }
        },
        change: (state, action) => {
            const historySize = state.arrHistory.length;
            for(let idx=historySize-1; idx>=0; idx--)
            {
                if( action.payload.svcId === state.arrHistory[idx]["SVC_ID"] )
                {
                    state.arrHistory[idx]["PARAMETER"] = action.payload.paramJson;
                    state.arrHistory[idx]["OPTIONS"  ] = action.payload.options;

                    break;
                }
            }
        },
        removeToSvcId: (state, action) => {
            for(let idx=state.arrHistory.length-1; idx>=0; idx--)
            {
                if( action.payload.svcId === state.arrHistory[idx]["SVC_ID"] )
                {
                    //findSvcIdHistory = state.arrHistory[idx]["SVC_ID"];
                    break;
                }
                state.arrHistory.pop();
            }
        }
    },
});

export const { add, pop, change, removeToSvcId } = historySlice.actions;
export default historySlice;
