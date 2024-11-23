import { useEffect, useState } from "react";
import apiClient from "../service/api-client";
import { AxiosRequestConfig, CanceledError } from "axios";

interface FetchResponse<T> {
    count:number
    results: T[]
}


const useData = <T>( endpoint:string,requestConfig?:AxiosRequestConfig,deps?:any[])=> {
    const [data, setData] = useState<T[]>([]);
    const [error, setError] = useState("");
    const [isLoding,setIsLoding]= useState(false);
  
    useEffect(() => {
      const controller = new AbortController();
      
      setIsLoding(true)
      apiClient
        .get<FetchResponse<T>>(endpoint,{signal: controller.signal,...requestConfig})
        .then((res) => {
            setData(res.data.results)
            setIsLoding(false)
        })
        .catch((err) => {
            if (err instanceof CanceledError) return;
            setError(err.message)
            setIsLoding(false)
        });

        return ()=>controller.abort();
    },deps? [...deps] : []);

    return {data,error,isLoding}
}

export default useData;