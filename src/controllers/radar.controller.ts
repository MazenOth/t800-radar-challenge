import { Request, Response } from 'express';
import { RadarService } from '../services/radar.service';
import { RadarRequest } from '../types';

export const radarController = {
  postRadar: (req: Request, res: Response) => {
    try {
      const request: RadarRequest = req.body;
      const response = RadarService.processRadar(request);
      res.json(response);
    } catch (error) {
      res.status(400).json({
        error:
          error instanceof Error ? error.message : 'Invalid request format',
      });
    }
  },
};
