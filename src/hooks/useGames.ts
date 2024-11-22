import useData from "./useData";

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



const useGames =()=> useData<Game>("/games");

export default useGames;