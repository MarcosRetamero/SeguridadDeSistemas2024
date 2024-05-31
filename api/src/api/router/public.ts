import { Router } from "express";
import {
    HealthCheck,
    GetCriptographicSecret
} from "@api/controller/public";

const router = Router();
 
router.get('/', HealthCheck);
router.get('/criptographic-secret', GetCriptographicSecret);

export default router;