import { RadarPoint, Position } from '../../types';
import { calculateDistance } from '../../utils';

export const furthestFirst = (points: RadarPoint[]) =>
  [...points].sort(
    (a, b) => calculateDistance(b.position) - calculateDistance(a.position)
  );
