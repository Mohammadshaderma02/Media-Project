import axios from "axios";

 export const  AxiosPublic=axios.create({baseURL:`${process.env.REACT_APP_URL_API}`});


