export enum Elevations {
  NONE = '0',
  S = '1',
  M = '2',
}

export enum Sizes {
  S = 'S',
  M = 'M',
}

export interface IProps {
  elevation?: Elevations;
  isActive?: boolean;
  size?: Sizes;
}
