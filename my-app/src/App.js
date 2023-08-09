import { MyApp } from "./MyApp";
import { HashRouter } from "react-router-dom";
import { useState } from "react";
import { setTheme } from "@ui5/webcomponents-base/dist/config/Theme";
import {
  MantineProvider,
  ColorSchemeProvider,
  ColorScheme,
} from "@mantine/core";

function App() {
  const [colorScheme, setColorScheme] = useState("light");
  const toggleColorScheme = (value) => {
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));
    setTheme(colorScheme === "dark" ? "sap_horizon" : "sap_horizon_dark");
  };
  return (
    <>
      <HashRouter>
        <ColorSchemeProvider
          colorScheme={colorScheme}
          toggleColorScheme={toggleColorScheme}
        >
          <MantineProvider
            theme={{ colorScheme }}
            withGlobalStyles
            withNormalizeCSS
          >
            <MyApp />
          </MantineProvider>
        </ColorSchemeProvider>
      </HashRouter>
    </>
  );
}

export default App;
