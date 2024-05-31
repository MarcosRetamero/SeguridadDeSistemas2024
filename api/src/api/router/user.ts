import { Router } from "express";
import { Create, GetList, UpdateResumme } from "@api/controller/user";

const router = Router();
 
router.post('/user', Create);
router.put('/user/:id', UpdateResumme);
router.get('/user', GetList);

export default router;