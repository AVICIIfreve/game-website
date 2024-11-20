import React from "react";
import { Game } from "./GameGrid";
import { Card, CardBody, Heading, Image } from "@chakra-ui/react";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card borderRadius={10} overflow="hidden">
      <Image src={game.background_image}></Image>
      <CardBody key={game.id}>
        <Heading fontSize="2xl">{game.name}</Heading>
      </CardBody>
    </Card>
  );
};

export default GameCard;
