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



const useGames =( selectedGenre:Genre |null ,selectedPlatform:p | null)=> useData<Game>("/games",{params:{genres:selectedGenre?.id,platforms:selectedPlatform?.id}},[selectedGenre?.id,selectedPlatform?.id]);

export default useGames;