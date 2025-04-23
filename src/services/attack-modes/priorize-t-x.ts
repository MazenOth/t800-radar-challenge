import { RadarPoint } from '../../types';

export const priorizeTX = (points: RadarPoint[]) =>
  [...points].sort((a, b) => {
    const aHasTX = a.targets.some((t) => t.type === 'T-X');
    const bHasTX = b.targets.some((t) => t.type === 'T-X');
    return (bHasTX ? 1 : 0) - (aHasTX ? 1 : 0);
  });