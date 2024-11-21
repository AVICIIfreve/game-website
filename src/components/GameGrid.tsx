import React, { useEffect, useState } from "react";
import apiClient from "../service/api-client";
import { SimpleGrid } from "@chakra-ui/react";
import GameCard from "./GameCard";
import useGames from "../hooks/useGames";
import GameCardSkeleton from "./GameCardSkeleton";

const GameGrid = () => {
  const { games, error, isLoding } = useGames();
  const skeletons = [1, 2, 3, 4, 5, 6];

  return (
    <>
      {error && <p>{error}</p>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        padding="10px"
        spacing={10}
      >
        {isLoding &&
          skeletons.map((skeletons) => <GameCardSkeleton></GameCardSkeleton>)}
        {games.map((game) => (
          <GameCard key={game.id} game={game}></GameCard>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
