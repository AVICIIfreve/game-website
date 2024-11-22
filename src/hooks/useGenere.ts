import { useEffect, useState } from "react";
import apiClient from "../service/api-client";
import { CanceledError } from "axios";


interface Genre {
    id:number;
    name:string
    slug:string
}

interface FetchGenreResponse {
    count:number
    results: Genre[]
}


const useGenres =()=> {
    const [genres, setGenres] = useState<Genre[]>([]);
    const [error, setError] = useState("");
    const [isLoding,setIsLoding]= useState(false);
  
    useEffect(() => {
      const controller = new AbortController();
      
      setIsLoding(true)
      apiClient
        .get<FetchGenreResponse>("/genres")
        .then((res) => {
            setGenres(res.data.results)
            setIsLoding(false)
        })
        .catch((err) => {
            if (err instanceof CanceledError) return;
            setError(err.message)
            setIsLoding(false)
        });

        return ()=>controller.abort();
    }, []);

    return {genres,error,isLoding}
}

export default useGenres;