import { isValidRadarPoint, RadarRequest, RadarResponse } from '../types';
import { attackModeHandlers } from '../services/attack-modes/index';

export class RadarService {
  static processRadar(request: RadarRequest): RadarResponse {
    const validRadar = request.radar.filter(isValidRadarPoint);

    if (validRadar.length === 0) {
      throw new Error('No valid radar points found');
    }

    let results = [...validRadar];

    request['attack-mode'].forEach((mode) => {
      results = attackModeHandlers[mode](results);
    });

    if (
      request['attack-mode'].length === 1 &&
      request['attack-mode'][0] === 'avoid-crossfire'
    ) {
      results.sort((a, b) => {
        const maxDamageA = Math.max(...a.targets.map((t) => t.damage || 0));
        const maxDamageB = Math.max(...b.targets.map((t) => t.damage || 0));
        return maxDamageB - maxDamageA;
      });
    }

    if (results.length === 0) {
      throw new Error('No valid targets after applying attack modes');
    }

    const selected = results[0];
    const targets = selected.targets
      .filter((t) => t.type !== 'Human')
      .sort((a, b) => {
        if (request['attack-mode'].includes('priorize-t-x')) {
          if (a.type === 'T-X' && b.type !== 'T-X') return -1;
          if (b.type === 'T-X' && a.type !== 'T-X') return 1;
        }
        return (b.damage || 0) - (a.damage || 0);
      })
      .map((t) => t.type);

    return {
      position: selected.position,
      targets,
    };
  }
}
