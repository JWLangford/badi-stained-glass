import { Button, Dialog, DialogActions } from "@material-ui/core"
import Box from "@material-ui/core/Box"
import * as React from "react"

interface IProps {
  image: string;
  open: boolean;
  setOpen(value: boolean): void;
}

export const Photo: React.FC<IProps> = props => {
  const { image, open, setOpen } = props;

  return (
    <Box>
      <Dialog open={open} onClose={() => setOpen(false)}>
        <Box p={2}>
          <img height={400} src={image} />
        </Box>
        <DialogActions>
          <Button onClick={() => setOpen(false)} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};
