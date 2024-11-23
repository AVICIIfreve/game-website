import useData from "./useData";
import { Genre } from "./useGenere";

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



const useGames =( selectedGenre:Genre |null)=> useData<Game>("/games",{params:{genres:selectedGenre?.id}},[selectedGenre?.id]);

export default useGames;