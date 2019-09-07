import Box from "@material-ui/core/Box"
import * as React from "react"

import { IMonth } from "../../typings"

interface IProps {
  imageUrl: string;
  month: IMonth;
}

export const Month: React.FC<IProps> = props => {
  const { imageUrl, month } = props;
  const {
    title,
    name,
    placement,
    element,
    design,
    sacredMoments,
    color
  } = month;
  return (
    <Box display="flex">
      <Box>
        <img src={imageUrl} />
      </Box>
      <Box>
        <Box>{title}</Box>
        <Box>{name}</Box>
        <Box>{placement}</Box>
        <Box>{element}</Box>
        <Box>{design}</Box>
        <Box>{sacredMoments}</Box>
        <Box>{color}</Box>
      </Box>
    </Box>
  );
};
