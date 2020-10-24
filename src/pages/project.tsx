import { useState, useCallback, ElementType } from "react";
import { Button, Text, Box, Flex, Heading, Divider } from "@chakra-ui/core";
import { Center, VStack } from "@chakra-ui/layout";
import { FolderOpen, Github, File } from "components/icons";

export default function Project() {
  const [isInitialized, setInitialized] = useState(false);
  const onLocalInit = useCallback(() => {
    setInitialized(true);
  }, []);
  const onGithubInit = useCallback(() => {
    setInitialized(true);
  }, []);
  const onBlankInit = useCallback(() => {
    setInitialized(true);
  }, []);

  if (!isInitialized)
    return (
      <Box backgroundColor="gray.100" minHeight="100vh">
        <Flex direction="column" height="100%">
          <Box height="100px" />
          <Box flexGrow={1} flexDirection="column" alignSelf="center">
            <Heading textAlign="center">Welcome to Tenet!</Heading>
            <Text lineHeight={3} textAlign="center">
              Please select from where to load your project:
            </Text>
            <VStack spacing="10px">
              <ProjectButton
                onClick={onLocalInit}
                color="blue.100"
                bgColor="blue.600"
                hoverColor="blue.50"
                hoverBgColor="blue.500"
                icon={FolderOpen}
                heading="Local project"
                description="Load project from your local filesystem"
              />
              <ProjectButton
                onClick={onGithubInit}
                color="gray.100"
                bgColor="gray.900"
                hoverColor="gray.50"
                hoverBgColor="gray.700"
                icon={Github}
                heading="Github repository"
                description="Load project from a remote git repository"
              />
            </VStack>
            <Flex direction="row" alignItems="center" my="20px">
              <Divider flexGrow={1} borderTop="1px solid black" />
              <Text px="5px">OR</Text>
              <Divider flexGrow={1} borderTop="1px solid black" />
            </Flex>
            <ProjectButton
              onClick={onBlankInit}
              color="green.100"
              bgColor="green.500"
              hoverColor="green.50"
              hoverBgColor="green.400"
              icon={File}
              heading="Create new project"
              description="Create a project in your browser; it can be exported later"
            />
          </Box>
        </Flex>
      </Box>
    );

  return null;
}

interface ProjectButtonType {
  onClick: () => void;
  color: string;
  hoverColor: string;
  bgColor: string;
  hoverBgColor: string;
  heading: string;
  description: string;
  icon: ElementType<{ width: string; height: string }>;
}

const ProjectButton = ({
  onClick,
  color,
  hoverColor,
  bgColor,
  hoverBgColor,
  heading,
  description,
  icon: Icon,
}: ProjectButtonType) => (
  <Button
    onClick={onClick}
    textAlign="left"
    px="20px"
    py="40px"
    width="420px"
    color={color}
    justifyContent="left"
    backgroundColor={bgColor}
    _hover={{ backgroundColor: hoverBgColor, color: hoverColor }}
  >
    <Flex direction="row">
      <Center pr="10px">
        <Icon width="60px" height="60px" />
      </Center>
      <Flex direction="column" alignContent="left" justifyContent="center">
        <Heading as="h6" size="md">
          {heading}
        </Heading>
        <Text fontWeight="normal" fontStyle="italic" fontSize="xs">
          {description}
        </Text>
      </Flex>
    </Flex>
  </Button>
);
