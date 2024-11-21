import { useEffect, useState } from "react";
import apiClient from "../service/api-client";
import { CanceledError } from "axios";

export interface Game {
    id: number;
    metacritic: number;
    name: string;
    background_image: string;
    parent_platforms: { platform: Platform }[];
  }

  export interface Platform {
    id: number;
    name: string;
    slug: string;
    image_background: string;
  }

  interface FetchGamesResponse {
    count: number;
    results: Game[];
  }


const useGames =()=> {
    const [games, setGames] = useState<Game[]>([]);
    const [error, setError] = useState("");
    const [isLoding,setIsLoding]= useState(false);
  
    useEffect(() => {
      const controller = new AbortController();
      
      setIsLoding(true)
      apiClient
        .get<FetchGamesResponse>("/games")
        .then((res) => {
            setGames(res.data.results)
            setIsLoding(false)
        })
        .catch((err) => {
            if (err instanceof CanceledError) return;
            setError(err.message)
            setIsLoding(false)
        });

        return ()=>controller.abort();
    }, []);

    return {games,error,isLoding}
}

export default useGames;