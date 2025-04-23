import { RadarPoint, Position } from '../../types';
import { calculateDistance } from '../../utils';

export const closestFirst = (points: RadarPoint[]) =>
  [...points].sort(
    (a, b) => calculateDistance(a.position) - calculateDistance(b.position)
  );