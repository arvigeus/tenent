import { FC } from "react";
import { ThemeProvider, CSSReset } from "@chakra-ui/core";

// import { TranslationProvider } from "my-i18n-lib"
// import defaultStrings from "i18n/en-x-default"

const AppWrapper: FC = ({ children }) => {
  return (
    <ThemeProvider>
      <CSSReset />
      {/* <TranslationProvider messages={defaultStrings}> */}
      {children}
      {/* </TranslationProvider> */}
    </ThemeProvider>
  );
};

export default AppWrapper;
