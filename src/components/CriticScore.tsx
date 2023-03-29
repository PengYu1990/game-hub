import { Badge } from "@chakra-ui/react";
import React from "react";

interface Props {
  score: number;
}

const CriticScore = ({ score }: Props) => {
  const color =
    score > 90 ? "green" : score > 70 ? "blue" : score > 50 ? "yellow" : "";
  return (
    <Badge colorScheme={color} paddingX={2}>
      {score}
    </Badge>
  );
};

export default CriticScore;
