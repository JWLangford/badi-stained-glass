import { CircularProgress, makeStyles, Theme } from "@material-ui/core"
import Box from "@material-ui/core/Box"
import CalendarTodayIcon from "@material-ui/icons/CalendarToday"
import axios from "axios"
import * as React from "react"
import { Link } from "react-router-dom"

import { Container } from "../../components"
import { getMonthNameFromUrl } from "../../helpers"

interface IProps {
  foo?: string;
}

const useStyles = makeStyles((theme: Theme) => ({
  month: {
    cursor: "pointer"
  }
}));

export const Months: React.FC<IProps> = props => {
  const css = useStyles();
  const [images, setImages] = React.useState<string[]>([]);
  const [loading, setLoading] = React.useState(false);
  React.useEffect(() => {
    setLoading(true);
    axios
      .get(
        "https://bl1x9r3y2i.execute-api.us-east-1.amazonaws.com/prod/images?name=months"
      )
      .then(function(response) {
        setLoading(false);
        setImages(response.data);
      })
      .catch(function(error) {
        setLoading(false);
        console.log(error);
      });
  }, []);

  return (
    <Box>
      <Box display="flex" justifyContent="center">
        <Box width="70%" p={2}>
          <Container
            icon={<CalendarTodayIcon fontSize="large" />}
            title="19 MONTHS"
          >
            <Box width={1} display="flex" flexWrap="wrap">
              {loading && (
                <Box>
                  <CircularProgress color="primary" />
                </Box>
              )}
              {images.map((image, index) => (
                <Box
                  className={css.month}
                  display="flex"
                  justifyContent="center"
                  width="30%"
                  flexWrap="wrap"
                  key={index}
                  p={2}
                >
                  <Box>
                    <Box>
                      <img
                        height={400}
                        src={`https://badistainedglass.s3.amazonaws.com/${image}`}
                      />
                    </Box>
                    <Box textAlign="center">
                      <Link to={`/months/${getMonthNameFromUrl(image)}`}>
                        {getMonthNameFromUrl(image)}
                      </Link>
                    </Box>
                  </Box>
                </Box>
              ))}
            </Box>
          </Container>
        </Box>
      </Box>
    </Box>
  );
};
