import { AppBar, Button, Theme, Toolbar } from "@material-ui/core"
import Box from "@material-ui/core/Box"
import { makeStyles } from "@material-ui/styles"
import * as React from "react"
import { Link } from "react-router-dom"

interface IProps {
  foo?: string;
}

const useStyles = makeStyles((theme: Theme) => ({
  link: {
    color: "#ffffff",
    textDecoration: "none"
  }
}));

export const Navbar: React.FC<IProps> = props => {
  const css = useStyles();
  return (
    <Box>
      <AppBar position="static">
        <Toolbar>
          <Box width={1} display="flex">
            <Box flexGrow={1}>
              <Button color="inherit">
                <Link className={css.link} to="/">
                  Badi Stained Glass
                </Link>
              </Button>
            </Box>
            <Box>
              <Button color="inherit">
                <Link className={css.link} to="/about">
                  About
                </Link>
              </Button>
              <Button color="inherit">
                <Link className={css.link} to="/months">
                  19 Months
                </Link>
              </Button>
              <Button color="inherit">
                <Link className={css.link} to="/gallery">
                  Gallery
                </Link>
              </Button>
              <Button color="inherit">
                <Link className={css.link} to="/contributors">
                  Contributors
                </Link>
              </Button>
              <Button color="inherit">
                <Link className={css.link} to="/additional-links">
                  Additional Links
                </Link>
              </Button>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
