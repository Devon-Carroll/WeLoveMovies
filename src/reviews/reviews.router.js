const router = require("express").Router();

const controller = require("./reviews.controller");

router.route("/").post(controller.create);

router.route("/:reviewsId").get(controller.read).put(controller.update).delete(controller.delete);


module.exports = router;