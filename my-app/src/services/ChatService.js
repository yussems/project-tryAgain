import axios from "axios";

export default class ChatService{
    async getAllMessages() {
        const url = "http://localhost:8080/message/all";
        const method = 'GET';
        const response = await axios.get(url);
        return response;
    }   

    async sendMessage(data){
        const url="http://localhost:8080/message/send";
        const method='POST';
        const response = await axios.get(url, data);
        return response;
    }   
}