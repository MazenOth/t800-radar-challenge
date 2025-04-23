import { closestFirst } from './closest-first';
import { furthestFirst } from './furthest-first';
import { avoidCrossfire } from './avoid-crossfire';
import { priorizeTX } from './priorize-t-x';
import { isValidRadarPoint, RadarPoint } from '../../types';

export const attackModeHandlers = {
  'closest-first': (points: RadarPoint[]) =>
    closestFirst(points.filter(isValidRadarPoint)),
  'furthest-first': (points: RadarPoint[]) =>
    furthestFirst(points.filter(isValidRadarPoint)),
  'avoid-crossfire': (points: RadarPoint[]) =>
    avoidCrossfire(points.filter(isValidRadarPoint)),
  'priorize-t-x': (points: RadarPoint[]) =>
    priorizeTX(points.filter(isValidRadarPoint)),
};
