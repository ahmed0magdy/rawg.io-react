import { Spinner } from "@chakra-ui/react";
import useTrailers from "../hooks/useTrailers";

interface Props {
  gameId: number;
}

const GameTrailer = ({ gameId }: Props) => {
  const { data, error, isLoading } = useTrailers(gameId);
  if (isLoading) return <Spinner />;
  if (error) throw error;
  const trailer = data?.results[0];
  return trailer ? (
    <video
      src={trailer.data[480]}
      controls
      autoPlay
      loop
      poster={trailer.preview}
    />
  ) : <p>No trailers found</p>;
};

export default GameTrailer;
