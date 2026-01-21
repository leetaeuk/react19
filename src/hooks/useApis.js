import axios from 'axios';
import {useCallback} from 'react';

const BASE_URL = ""; // API의 기본 URL
const HTTP_REQUEST = axios.create({
    baseURL: BASE_URL,
    /*headers: {
        'Content-Type': 'application/json',
    },*/
});

// 요청 인터셉터 (필요한 경우)
HTTP_REQUEST.interceptors.request.use(
    (config) => {
        /*
        const token = localStorage.getItem('token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        */
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// 응답 인터셉터 (필요한 경우)
HTTP_REQUEST.interceptors.response.use(
    (response) => {
        return response.data;
    },
    (error) => {
        return Promise.reject(error);
    }
);

/**
 * api 호출 공통함수
 */
const useApis = (util) => {

    /**
     * GET 요청
     * @type {(function(*, {}=): Promise<axios.AxiosResponse<any>|undefined>)|*}
     */
    const get = useCallback(async (url, params = {}) => {
        // util.setLoading({isShow:true});

        try
        {
            const response = await HTTP_REQUEST.get(url, {params});
            // util.setLoading({isShow:false});
            return response;
        }
        catch (err)
        {
            // util.setLoading({isShow:false});
            throw err;
        }
    }, [util]);

    /**
     * POST 요청
     * @type {(function(*, {}=): Promise<axios.AxiosResponse<any>|undefined>)|*}
     */
    const post = useCallback(async (url, data = {}) => {
        // util.setLoading({isShow:true});
        try
        {
            const response = await HTTP_REQUEST.post(url, data);
            // util.setLoading({isShow:false});
            return response;
        }
        catch (err)
        {
            // util.openDialog({title:"알림메시지", message:err.message})
            // util.setLoading({isShow:false});
            throw err;
        }
    }, [util]);

    return {
        get, post
    };
};

export default useApis;
