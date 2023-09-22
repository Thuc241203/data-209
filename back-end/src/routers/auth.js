import express from "express";
import {
  Login,
  Register,
  list,
  resetPassword,
  sendResetLinkEmail,
} from "../controllers/auth";

const router = express.Router();

router.post("/register", Register);
router.post("/login", Login);
router.post("/password/email", sendResetLinkEmail);
router.post("/password/reset", resetPassword);
router.get("/user", list);
export default router;
