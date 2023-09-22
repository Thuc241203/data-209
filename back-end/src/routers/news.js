import { Router } from "express";
import { list, show, create, update, destroy } from "../controllers/news";
import { checkPermission } from "../middlewares/checkPermission";
const router = Router();

router.get("/news", list);
router.get("/news/:id", show);
router.post("/news", checkPermission, create);
router.put("/news/:id", checkPermission, update);
router.delete("/news/:id", checkPermission, destroy);
export default router;
