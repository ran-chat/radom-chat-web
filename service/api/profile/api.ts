import { API } from "@/service/authService";
import { rest } from "@/service/rest";
import { USER_PROFILE } from "./model";

export const getUserProfile = async(id:number):Promise<USER_PROFILE> => {
    return await API.get(`${rest.get.profile}/${id}`).then((res) => res.data);
}