import { CssBaseline } from "@material-ui/core"
import { ThemeProvider } from "@material-ui/styles"
import * as React from "react"

import { Entry } from "../entry"
import { createTheme } from "./theme"

export const App: React.FC = () => {
  return (
    <ThemeProvider theme={createTheme()}>
      <CssBaseline />
      <Entry />
    </ThemeProvider>
  );
};
