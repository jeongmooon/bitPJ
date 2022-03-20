import axios from "axios";

const client = axios.create();

client.defaults.baseURL = "http://192.168.0.28:8080/Homework01/";

export default client;