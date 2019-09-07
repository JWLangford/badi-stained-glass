import { Divider, Paper, Theme } from "@material-ui/core"
import Box from "@material-ui/core/Box"
import { makeStyles } from "@material-ui/styles"
import * as React from "react"

interface IProps {
  icon?: any;
  title: string;
}

const useStyles = makeStyles((theme: Theme) => ({
  icon: {
    height: "80px",
    width: "80px"
  },
  container: {
    padding: theme.spacing(4)
  }
}));

export const Container: React.FC<IProps> = props => {
  const { icon, title, children } = props;
  const css = useStyles();
  return (
    <Box>
      <Paper className={css.container} elevation={1}>
        <Box display="flex">
          <Box>
            <Box
              height={1}
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              {icon}
            </Box>
          </Box>
          <Box display="flex" alignItems="center" ml={4}>
            {title}
          </Box>
        </Box>
        <Box pt={2} pb={2}>
          <Divider />
        </Box>
        <Box>{children}</Box>
      </Paper>
    </Box>
  );
};
