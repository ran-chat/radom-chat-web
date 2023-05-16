import { API } from "@/service/authService";
import { rest } from "@/service/rest";
import { CHAT_LIST } from "./model";

export const getChatList = async(roomKey: number):Promise<CHAT_LIST[]> => {
    return await API.get(`${rest.get.chatlist}/${roomKey}`).then((res)=> res.data);
}