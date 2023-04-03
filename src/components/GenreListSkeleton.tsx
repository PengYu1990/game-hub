import { HStack, ListItem, Skeleton, SkeletonText } from "@chakra-ui/react";
import React from "react";

const GenreListSkeleton = () => {
  return (
    <ListItem paddingY="5px">
      <SkeletonText height="30px" />
    </ListItem>
  );
};

export default GenreListSkeleton;
