import { FC } from "react";
import { RecoilRoot } from "recoil";
import { ChakraProvider, theme } from "@chakra-ui/react";

// import { TranslationProvider } from "my-i18n-lib"
// import defaultStrings from "i18n/en-x-default"

const AppWrapper: FC = ({ children }) => {
  return (
    <RecoilRoot>
      <ChakraProvider theme={customTheme}>
        {/* <TranslationProvider messages={defaultStrings}> */}
        {children}
        {/* </TranslationProvider> */}
      </ChakraProvider>
    </RecoilRoot>
  );
};

const customTheme = {
  ...theme,
  colors: {
    ...theme.colors,
    dark: {
      100: "#ddd",
      200: "#969199",
      300: "#82777a",
      400: "#7b7b7b",
      600: "#333",
      700: "#252526",
      800: "#1e1e1e",
    },
  },
};

export default AppWrapper;
