import { useCallback, useState, ComponentType, ReactNode } from "react";
import { Flex, Box, IconButton, Tooltip, VStack } from "@chakra-ui/react";
import { useRouter } from "next/router";
import navigation from "./navigation";
import Scrollable from "components/Scrollable";

interface ThreeViewPanelProps {
  sidePanel: ReactNode;
  children: ReactNode;
}

export default function ThreeViewPanel({
  sidePanel,
  children,
}: ThreeViewPanelProps) {
  const { pathname, push } = useRouter();
  const [isShown, setShown] = useState(true);
  const handleClick = useCallback(
    (href: string) => {
      if (pathname === href) setShown(!isShown);
      else push(href);
    },
    [push, pathname, isShown]
  );
  return (
    <Flex width="100vw" height="100vh" direction="row">
      <Box
        backgroundColor="dark.600"
        flex="0 0 48px"
        height="100%"
        width="100%"
      >
        <VStack spacing="10px" paddingTop="10px">
          {navigation.map(({ name, path, icon }) => (
            <IconLink
              key={path}
              label={name}
              icon={icon}
              href={path}
              onClick={handleClick}
              isActive={pathname === path}
            />
          ))}
        </VStack>
      </Box>
      {isShown && (
        <Scrollable backgroundColor="dark.700" flex="0 0 340px" height="100%">
          {sidePanel}
        </Scrollable>
      )}
      <Box flex="1 1 auto" overflow="auto" position="relative">
        {children}
      </Box>
    </Flex>
  );
}

interface IconLinkProps {
  label: string;
  icon: ComponentType;
  href: string;
  isActive?: boolean;
  onClick: (item: string) => void;
}

const IconLink = ({
  label,
  href,
  icon: Icon,
  isActive,
  onClick,
}: IconLinkProps) => {
  const handleClick = useCallback(() => onClick(href), [href, onClick]);
  return (
    <Tooltip label={label} aria-label={label}>
      <IconButton
        variant="ghost"
        color={isActive ? "white" : "dark.400"}
        aria-label={label}
        fontSize="28px"
        justifyContent="center"
        borderRadius="none"
        boxShadow={isActive ? "-2px 0 white" : "none"}
        _hover={{ background: "none", color: isActive ? "white" : "dark.100" }}
        _active={{ background: "none" }}
        _focus={{ outline: "none" }}
        icon={<Icon />}
        onClick={handleClick}
      />
    </Tooltip>
  );
};
