import { Router } from 'express';
import { radarController } from '../controllers/radar.controller';
import { jsonParser } from '../middlewares';

const router = Router();

router.post('/radar', jsonParser, radarController.postRadar);

export const routes = router;
