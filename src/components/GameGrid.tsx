import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkelenton from "./GameCardSkelenton";

const GameGrid = () => {
  const { games, error, isLoading } = useGames();

  const skelentons = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} spacing="10px">
        {isLoading && skelentons.map((skelenton) => <GameCardSkelenton />)}
        {games &&
          games.map((game) => <GameCard key={game.id} game={game}></GameCard>)}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
