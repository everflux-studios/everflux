import { RefObject } from 'react';

export interface refProps {
  aRef?: RefObject<HTMLDivElement | null>;
  pRef?: RefObject<HTMLDivElement | null>;
  cRef?: RefObject<HTMLDivElement | null>;
  handleClick?: (r: RefObject<HTMLElement | null>) => void;
}
