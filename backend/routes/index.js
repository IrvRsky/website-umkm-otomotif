import express from "express";
import { getAdmin, getAdminById, Register, Login, Logout } from "../controllers/Admin.js";
import { verifyToken } from "../middleware/VerifyToken.js";
import { refreshToken } from "../controllers/RefreshToken.js";
import { refreshTokenUser } from "../controllers/RefreshTokenUser.js";
import { addBengkel, getBengkel, getBengkelById , getDataBengkel} from "../controllers/Bengkel.js";
import { getUser } from "../controllers/User.js";
import { UserRegister, UserLogin, UserLogout } from "../controllers/User.js";
import { getArtikel } from "../controllers/Artikel.js";
import { refreshTokenBengkel } from "../controllers/RefreshTokenBengkel.js";

const router = express.Router();
// admin routes
router.get('/admin', getAdmin);
router.get('/admin/:id', getAdminById);
router.post('/register', Register);
router.post('/login', Login);
router.get('/token', refreshToken);
router.delete('/logout', Logout);

// bengkel routes
router.get('/bengkel', verifyToken, getBengkel);
router.get('/bengkel-data', getDataBengkel);
router.post('/bengkel/add', verifyToken, addBengkel);
router.get('/bengkel/:id', getBengkelById);
router.get('/token-bengkel', refreshTokenBengkel);

// user routes
router.get('/user', verifyToken, getUser);
router.post('/register-user', UserRegister);
router.post('/login-user', UserLogin);
router.get('/token-user', refreshTokenUser);
router.delete('/logout-user', UserLogout);

// artikel routes
router.get('/artikel', getArtikel);

export default router;
