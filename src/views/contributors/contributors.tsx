import { Box } from "@material-ui/core"
import GroupIcon from "@material-ui/icons/Group"
import React from "react"

import { Container } from "../../components"

export const Contributors: React.FC = props => {
  return (
    <Box display="flex" justifyContent="center">
      <Box width="70%" p={2}>
        <Container icon={<GroupIcon fontSize="large" />} title="CONTRIBUTORS">
          <Box>
            <Box>
              <Box mb={2}>
                Reference material from The Universal House of Justice
              </Box>
              <Box mb={2}>
                Reference material from Saiedi, Nader. “Gate of the Heart:
                Understanding the Writings of the Bab.” Association for Baha’i
                Studies and Wilfrid Laurier University. 2008.
              </Box>
              <Box mb={2}>
                Wilmette Institute. Badi' (Baha'i) Calendar: Reshaping our
                material, social and spiritual reality.
              </Box>
              <Box mb={2}>
                Glass art by Heather MacLeod, Brownfield, ME,
                harleyfrogart@hotmail.com
              </Box>
              <Box mb={2}>
                Glass art by Nathan Macomber{" "}
                <a href="http://www.macomberglass.com">
                  http://www.macomberglass.com
                </a>
              </Box>
              <Box mb={2}>
                Design consulting by Donald L. Grose & Associates,
                donaldlgrose@verizon.net, 267 Singletary Lane, Framingham, MA
                01702
              </Box>
              <Box mb={2}>
                Installation by Mike Dutra, Casey McCarthy, Tim Houldcroft, and
                Chris Hammond of Auburndale Builders, Inc., 617-467-4171,
                <a href="www.Auburndalebuilders.com">
                  {" "}
                  www.Auburndalebuilders.com{" "}
                </a>
              </Box>
              <Box mb={2}>
                Frame design and fabrication by Chris Kovacs Design,
                978-490-0265,{" "}
                <a href="http://chriskovacsdesigns.com/about.html">
                  http://chriskovacsdesigns.com/about.html
                </a>
              </Box>
              <Box mb={2}>
                Painting by David L. Morrisson & Rob Barwis, 128 Sterling Rd.,
                Princeton, MA 01551
              </Box>
              <Box mb={2}>Joe Keller, Brownfield, ME</Box>
              <Box mb={2}>
                <address>
                  Website built by{" "}
                  <a href="mailto:jesselangford472@gmail.com">Jesse Langford</a>
                </address>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};
