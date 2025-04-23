export type Target = {
  type:
    | 'Human'
    | 'T1'
    | 'T1-9'
    | 'T7-T'
    | 'T-X'
    | 'HK-Airstrike'
    | 'HK-Bomber'
    | 'HK-Tank';
  damage?: number;
};

export type Position = {
  x: number;
  y: number;
};

export type RadarPoint = {
  position: Position;
  targets: Target[];
};

export type AttackMode =
  | 'closest-first'
  | 'furthest-first'
  | 'avoid-crossfire'
  | 'priorize-t-x';

export type RadarRequest = {
  'attack-mode': AttackMode[];
  radar: RadarPoint[];
};

export type RadarResponse = {
  position: Position;
  targets: string[];
};

// Add validation type
export type ValidRadarPoint = {
  position: Position;
  targets: Target[];
};

export function isValidRadarPoint(point: any): point is ValidRadarPoint {
  return Array.isArray(point?.targets);
}
