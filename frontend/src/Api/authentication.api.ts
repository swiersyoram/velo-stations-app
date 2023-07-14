import { BACKEND_URL } from "../Components/const/api.const";
import { IAuth } from "../Models/auth.type";
import axiosConfig from "../axiosConfig";

export const postLogin = (payload: IAuth) =>
  axiosConfig.post(BACKEND_URL + "/login", payload);
export const postLogout = () => axiosConfig.post(BACKEND_URL + "/logout");
export const getAuth = () => axiosConfig.get(BACKEND_URL + "/authenticate");
