import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}

const CriticScore = ({ score }: Props) => {
  let color = score > 80 ? "green" : score > 70 ? "orange" : "";
  return (
    <Badge colorScheme={color} fontSize="sm">
      {score}
    </Badge>
  );
};

export default CriticScore;
