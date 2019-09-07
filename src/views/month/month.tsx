import Box from "@material-ui/core/Box"
import InsertInvitationIcon from "@material-ui/icons/InsertInvitation"
import * as React from "react"
import { Link } from "react-router-dom"

import { Container } from "../../components"
import { monthList } from "./months-list"

interface IProps {
  match: any;
}

export const Month: React.FC<IProps> = props => {
  const { match } = props;

  const name = match.params.name;

  if (name === "") {
    return <Box>No name detected</Box>;
  }

  const month = monthList[name.toString()];

  return (
    <Box>
      <Box display="flex" justifyContent="center">
        <Box width="70%" p={2}>
          <Container
            icon={<InsertInvitationIcon fontSize="large" />}
            title={name.toUpperCase()}
          >
            <Box>
              <Box width={1} display="flex">
                <Box>
                  <img src={month.url} height={400} />
                </Box>
                <Box ml={2} fontWeight="fontWeightLight">
                  <Box mb={2}>Name: {month.name}</Box>
                  <Box mb={2}>Placement: {month.placement}</Box>
                  {month.design && <Box mb={2}>Design: {month.design}</Box>}
                  {month.sacredMoments && (
                    <Box mb={2}>Sacred Moments: {month.sacredMoments}</Box>
                  )}
                  {month.color && <Box mb={2}>Color: {month.color}</Box>}
                  {month.artistCommentary && (
                    <Box>Artist Commentary: {month.artistCommentary}</Box>
                  )}
                </Box>
              </Box>
              <Box width={1} display="flex" justifyContent="flex-end">
                <Link to="/months">back</Link>
              </Box>
            </Box>
          </Container>
        </Box>
      </Box>
    </Box>
  );
};
