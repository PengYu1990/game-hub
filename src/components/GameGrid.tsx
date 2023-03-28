import { Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import useGames from "../hooks/useGames";
import apiClient from "../services/api-client";

const GameGrid = () => {
  const { games, error } = useGames();

  return (
    <>
      {error && <Text>{error}</Text>}
      <ul>
        {games && games.map((game) => <li key={game.id}>{game.name}</li>)}
      </ul>
    </>
  );
};

export default GameGrid;
