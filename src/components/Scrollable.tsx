import { Box } from "@chakra-ui/react";
import styled from "@emotion/styled";

const Scrollable = styled(Box)`
  overflow: hidden;
  &::-webkit-scrollbar {
    width: 12px;
    height: 12px;
  }
  &::-webkit-scrollbar-track {
    background: rgb(255 255 255 / 20%);
    border-radius: 10px;
  }
  &::-webkit-scrollbar-thumb {
    background: rgb(0 0 0 / 25%);
    border: 2px solid rgb(255 255 255 / 20%);
    border-radius: 10px;
  }
  &:hover,
  &:focus {
    overflow: auto;
  }
  &::-webkit-scrollbar-thumb:hover,
  &::-webkit-scrollbar-thumb:focus,
  &::-webkit-scrollbar-thumb:active {
    background: rgb(0 0 0 / 40%);
  }
  &::-webkit-scrollbar-thumb:active {
    background: rgb(0 0 0 / 40%);
  }
`;

export default Scrollable;

// #fdfdfd
