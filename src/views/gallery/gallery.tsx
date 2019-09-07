import { CircularProgress } from "@material-ui/core"
import Box from "@material-ui/core/Box"
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary"
import axios from "axios"
import * as React from "react"

import { Container } from "../../components"
import { Photo } from "../photo"

interface IProps {
  foo?: string;
}

export const Gallery: React.FC<IProps> = props => {
  const [images, setImages] = React.useState<string[]>([]);
  const [loading, setLoading] = React.useState(false);
  const [image, setImage] = React.useState("");
  const [open, setOpen] = React.useState(false);
  React.useEffect(() => {
    setLoading(true);
    axios
      .get(
        "https://bl1x9r3y2i.execute-api.us-east-1.amazonaws.com/prod/images?name=gallery"
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

  const handleImage = (image: string) => {
    setImage(`https://badistainedglass.s3.amazonaws.com/${image}`);
    setOpen(true);
  };

  return (
    <Box>
      <Box display="flex" justifyContent="center">
        <Box width="70%" p={2}>
          <Container
            icon={<PhotoLibraryIcon fontSize="large" />}
            title="GALLERY"
          >
            <Box width={1} display="flex" flexWrap="wrap">
              {loading && (
                <Box>
                  <CircularProgress color="primary" />
                </Box>
              )}
              {images.map((image, index) => (
                <Box
                  display="flex"
                  justifyContent="center"
                  width="33%"
                  flexWrap="wrap"
                  key={index}
                  p={2}
                >
                  <Box>
                    <Box
                      style={{ cursor: "pointer" }}
                      onClick={() => handleImage(image)}
                    >
                      <img
                        height={200}
                        src={`https://badistainedglass.s3.amazonaws.com/${image}`}
                      />
                    </Box>
                  </Box>
                </Box>
              ))}
            </Box>
          </Container>
        </Box>
      </Box>
      <Photo image={image} open={open} setOpen={setOpen} />
    </Box>
  );
};
