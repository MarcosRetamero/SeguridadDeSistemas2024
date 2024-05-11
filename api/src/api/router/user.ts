import { Router } from "express";
import { Create, GetList } from "@api/controller/user";

const router = Router();
 
router.post('/user', Create);
router.get('/user', GetList);

export default router;