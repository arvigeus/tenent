import { FC } from "react";
import { RecoilRoot } from "recoil";
import { ThemeProvider, CSSReset, theme } from "@chakra-ui/core";

// import { TranslationProvider } from "my-i18n-lib"
// import defaultStrings from "i18n/en-x-default"

const AppWrapper: FC = ({ children }) => {
  return (
    <RecoilRoot>
      <ThemeProvider theme={customTheme}>
        <CSSReset />
        {/* <TranslationProvider messages={defaultStrings}> */}
        {children}
        {/* </TranslationProvider> */}
      </ThemeProvider>
    </RecoilRoot>
  );
};

const customTheme = {
  ...theme,
  colors: {
    ...theme.colors,
    dark: {
      100: "#ddd",
      400: "#7b7b7b",
      600: "#333",
      700: "#252526",
      800: "#1e1e1e",
    },
  },
};

export default AppWrapper;
