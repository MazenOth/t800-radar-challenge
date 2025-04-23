import { RadarPoint } from '../../types';

export const avoidCrossfire = (points: RadarPoint[]) =>
  points.filter((point) => !point.targets.some((t) => t.type === 'Human'));