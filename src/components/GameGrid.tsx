import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardContainer from "./GameCardContainer";
import GameCardSkelenton from "./GameCardSkelenton";

const GameGrid = () => {
  const { data, error, isLoading } = useGames();

  const skelentons = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} spacing="10px">
        {isLoading &&
          skelentons.map((skelenton) => (
            <GameCardContainer>
              <GameCardSkelenton key={skelenton} />
            </GameCardContainer>
          ))}
        {data &&
          data.map((game) => (
            <GameCardContainer>
              <GameCard key={game.id} game={game}></GameCard>
            </GameCardContainer>
          ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
