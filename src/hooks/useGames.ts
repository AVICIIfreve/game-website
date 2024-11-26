import { GameQuery } from "../App";
import useData from "./useData";
import { Genre } from "./useGenere";
import { Platform as p } from "./usePlatforms";

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



const useGames =( gameQuery:GameQuery)=> useData<Game>("/games",{
  params:{genres:gameQuery.genre?.id,
    platforms:gameQuery.platform?.id,
    ordering:gameQuery.sortOrder
  }
},
  [gameQuery]);

export default useGames;