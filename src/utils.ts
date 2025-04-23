import { Position } from '../src/types';

export const calculateDistance = (p: Position): number =>
  Math.sqrt(p.x ** 2 + p.y ** 2);