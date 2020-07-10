import * as Chakra from '@chakra-ui/core';

export type ITheme = Chakra.ITheme & {
  radii: {
    l: string;
    m: string;
    s: string;
  };
};
