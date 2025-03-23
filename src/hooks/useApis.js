// src/hooks/useApi.js
import { useState, useCallback } from 'react';
import axios from 'axios';

const BASE_URL = ''; // API의 기본 URL

const httpRequest = axios.create({
    baseURL: BASE_URL,
    /*headers: {
        'Content-Type': 'application/json',
    },*/
});

// 요청 인터셉터 (필요한 경우)
httpRequest.interceptors.request.use(
    (config) => {
        /*const token = localStorage.getItem('token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }*/
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// 응답 인터셉터 (필요한 경우)
httpRequest.interceptors.response.use(
    (response) => {
        return response.data;
    },
    (error) => {
        return Promise.reject(error);
    }
);

const useApis = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    // GET 요청
    const get = useCallback(async (url, params = {}) => {
        setLoading(true);
        setError(null);
        try {
            const response = await httpRequest.get(url, { params });
            setLoading(false);
            return response;
        } catch (err) {
            setError(err);
            setLoading(false);
            throw err;
        }
    }, []);

    // POST 요청
    const post = useCallback(async (url, data = {}) => {
        setLoading(true);
        setError(null);
        try {
            const response = await httpRequest.post(url, data);
            setLoading(false);
            return response;
        } catch (err) {
            setError(err);
            setLoading(false);
            throw err;
        }
    }, []);

    // PUT 요청
    const put = useCallback(async (url, data = {}) => {
        setLoading(true);
        setError(null);
        try {
            const response = await httpRequest.put(url, data);
            setLoading(false);
            return response;
        } catch (err) {
            setError(err);
            setLoading(false);
            throw err;
        }
    }, []);

    // DELETE 요청
    const remove = useCallback(async (url) => {
        setLoading(true);
        setError(null);
        try {
            const response = await httpRequest.delete(url);
            setLoading(false);
            return response;
        } catch (err) {
            setError(err);
            setLoading(false);
            throw err;
        }
    }, []);

    return {
        loading,
        error,
        get,
        post,
        put,
        remove,
    };
};

export default useApis;