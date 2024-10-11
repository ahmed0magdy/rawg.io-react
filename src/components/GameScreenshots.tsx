import { Image, SimpleGrid, Spinner } from "@chakra-ui/react";
import useScreenshot from "../hooks/useScreenshot";

interface Props {
  gameId: number;
}
const GameScreenshots = ({ gameId }: Props) => {
  const { data, error, isLoading } = useScreenshot(gameId);
  if (isLoading) return <Spinner />;
  if (error) throw error;

  return (
    <SimpleGrid column={{ base: 1, md: 2 }} spacing={2}>
      {data?.results.map((i) => (
        <Image key={i.id} src={i.image} />
      ))}
    </SimpleGrid>
  );
};
export default GameScreenshots;
