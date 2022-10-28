const { Router } = require('express');

const diaryController = require('../controllers/diary.js');
const authenticator = require("../middleware/authenticator");

const postRouter = Router();

postRouter.get("/", authenticator, diaryController.index);
postRouter.post("/", authenticator, diaryController.create);
postRouter.get("/:id", authenticator, diaryController.show);
postRouter.delete("/:id", authenticator, diaryController.destroy);
postRouter.patch("/:id", authenticator, diaryController.updateDiary);

module.exports = postRouter;
