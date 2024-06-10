const router = require("express").Router();

const {
  createUser,
  verifyPassword,
  updatePassword,
} = require("../controllers/userController");

// localhost:3001/api/createUser
router.post("/createUser", createUser);

// localhost:3001/api/verifyPassword
router.post("/verifyPassword", verifyPassword);

// localhost:3001/api/updatePassword
router.put("/updatePassword", updatePassword);

module.exports = router;
