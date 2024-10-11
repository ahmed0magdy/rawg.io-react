import { Button, Text } from "@chakra-ui/react";
import { useState } from "react";

interface Props {
  children: string;
}

const ExpandableText = ({ children }: Props) => {
  const [expanded, setExpanded] = useState(false);
  const limit = 300;

  if (!children) return null;
  if (children.length <= limit) return <Text>{children}</Text>;
  const truncated = expanded ? children : children.substring(0, limit) + "....";

  return (
    <>
      <Text as="p">{truncated}</Text>
      <Button as="button" onClick={() => setExpanded(!expanded)}>
        {expanded ? "Show Less" : "Read More"}
      </Button>
    </>
  );
};

export default ExpandableText;
