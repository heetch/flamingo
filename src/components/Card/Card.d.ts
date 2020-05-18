export enum CardElevations {
  NONE = '0',
  S = '1',
  M = '2',
}

export enum CardSizes {
  S = 'S',
  M = 'M',
}

export interface CardProps {
  elevation?: Elevations;
  isActive?: boolean;
  size?: Sizes;
}
