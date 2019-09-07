import Box from "@material-ui/core/Box"
import BrightnessIcon from "@material-ui/icons/BrightnessLow"
import * as React from "react"

import { Container } from "../../components"

interface IProps {
  foo?: string;
}

export const Home: React.FC<IProps> = props => {
  return (
    <Box display="flex" justifyContent="center">
      <Box width="70%" p={2} fontWeight="fontWeightLight">
        <Container
          icon={<BrightnessIcon fontSize="large" />}
          title="BADI’ STAINED GLASS PROJECT"
        >
          <Box mb={2}>
            During the design of a Passive House in Wayland, Massachusetts,
            skylights were added to increase the 'solar gain.' The building
            designer, Donald L. Grose, suggested that a stained glass window
            might be used to adorn two of the skylights. Artist Heather MacLeod
            of Brownfield, Maine designed and built a stained glass art piece
            that represents the Badi' (Baha'i) solar calendar, consisting of 19
            months of 19 days each. This website documents and describes the
            design and building process.
          </Box>
          <Box mb={2} display="flex">
            <Box width="50%" pr={1}>
              <img
                height={300}
                width="100%"
                src={"/assets/images/home-4.jpeg"}
              />
            </Box>
            <Box width="50%" pl={1}>
              <img
                height={300}
                width="100%"
                src={"/assets/images/home-1.jpeg"}
              />
            </Box>
          </Box>
          <Box mb={2}>
            This video documents the design, building and installation of the
            Badi’ (Baha’i) Calendar in Stained Glass from Kamal 172 (August
            2015) through Kamal 173 B.E. (August 2016), now located in Wayland,
            Massachusetts, United States of America.
          </Box>
          <Box mb={2}>
            <iframe
              width="560"
              height="315"
              src="//www.youtube.com/embed/jfZKRK5FbMM"
              allowfullscreen
            ></iframe>
          </Box>
          <Box>
            Music by Steve Pollitt (bamboostevepollitt@gmail.com) Instrument:
            Shruti Box (or Serpeti) Words taken from the Persian Bayan 5:3 as
            found in “Gate of the Heart: Understanding the Writings of the Bab”
            by Nader Saiedi, Association for Baha’i Studies and Wilfrid Laurier
            University, 2008.
          </Box>
        </Container>
      </Box>
    </Box>
  );
};
