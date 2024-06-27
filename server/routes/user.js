const express = require("express");
const multer = require("multer");
const path = require("path");
const Controllers = require("../controllers/userController");

const router = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, "../client/src/images/user");
  },
  filename: (req, file, callback) => {
    callback(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage });

router.post("/signup", upload.single("image"), Controllers.signupUser);
router.post("/login", Controllers.loginUser);
router.post("/signup/otp", Controllers.otpSignupUser);
router.get("/user-data/:token", Controllers.getUserdata);
router.get('/auth-token', Controllers.authUserToken);

module.exports = router;
