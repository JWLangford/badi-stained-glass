import Box from "@material-ui/core/Box"
import LinkIcon from "@material-ui/icons/Link"
import * as React from "react"

import { Container } from "../../components"

interface IProps {
  foo?: string;
}

export const AdditionalLinks: React.FC<IProps> = props => {
  return (
    <Box display="flex" justifyContent="center">
      <Box width="70%" p={2}>
        <Container
          icon={<LinkIcon fontSize="large" />}
          title="ADDITIONAL LINKS"
        >
          <Box>
            <Box mb={2}>
              <a
                target="_blank"
                href="http://wilmetteinstitute.org/the-badi-calendar-in-a-stained-glass-skylight/"
              >
                Wilmette Institute eNewsletter Article
              </a>
            </Box>
            <Box mb={2}>
              <a
                target="_blank"
                href="http://chupin.ru/library/NaderSaiedi/Gate_of_the_Heart.pdf"
              >
                Gate of the Heart: Understanding the Writings of the Bab by
                Nader Saiedi, 2008{" "}
              </a>
            </Box>
            <Box>
              <a
                target="_blank"
                href="http://universalhouseofjustice.bahai.org/"
              >
                The Universal House of Justice{" "}
              </a>
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};
