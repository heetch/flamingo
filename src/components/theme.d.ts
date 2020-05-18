import { ITheme as ChakraITheme } from '@chakra-ui/core';

export type ITheme = ChakraITheme & {
  radii: {
    l: string;
    m: string;
    s: string;
  };
};
