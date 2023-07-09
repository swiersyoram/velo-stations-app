import {BACKEND_URL} from "../Components/const/api.const";
import axiosConfig from "../axiosConfig";

export const getAllStations = () => axiosConfig
    .get(BACKEND_URL+"/stations")

