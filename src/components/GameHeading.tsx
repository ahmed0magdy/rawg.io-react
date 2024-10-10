import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";
import useGenres from "../hooks/useGenres";
import usePlatforms from "../hooks/usePlatforms";

interface Props {
  gameQuery: GameQuery;
}
const GameHeading = ({ gameQuery }: Props) => {
  const { data: genres } = useGenres();
  const { data: platforms } = usePlatforms();

  const genreName = genres?.results.find(
    (g) => g.id === gameQuery.genreId
  )?.name;
  const platformName = platforms?.results.find(
    (p) => p.id === gameQuery.platformId
  )?.name;

  const heading = `${platformName || ""} ${genreName || ""} Games`;
  0;
  return (
    <Heading as="h1" marginY={5} fontSize="5xl">
      {heading}
    </Heading>
  );
};

export default GameHeading;
