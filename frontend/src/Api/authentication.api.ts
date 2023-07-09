import React from "react";
import {BACKEND_URL} from "../Components/const/api.const";
import {IAuth} from "../Models/auth.type";
import axiosConfig from "../axiosConfig";


export const postLogin = (payload:IAuth) => axiosConfig
    .post(BACKEND_URL+"/login", payload, )

export const getAuth = () => axiosConfig
    .get(BACKEND_URL+"/authenticate", )