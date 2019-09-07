import { Theme } from "@material-ui/core"
import Box from "@material-ui/core/Box"
import { makeStyles } from "@material-ui/styles"
import * as React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

import { Navbar } from "../navbar"
import { routes } from "../routes"

interface IProps {
  foo?: string;
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    height: "100vh"
  }
}));

export const Entry: React.FC<IProps> = props => {
  const css = useStyles();

  return (
    <Box className={css.root}>
      <Router>
        <Box>
          <Box>
            <Navbar />
          </Box>
          <Box>
            <Switch>
              {routes.map((route, index) => (
                <Route key={index} {...route} />
              ))}
            </Switch>
          </Box>
        </Box>
      </Router>
    </Box>
  );
};
