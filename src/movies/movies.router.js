const router = require("express").Router();

const controller = require("./movies.controller");

router.route("/").get(controller.list);

router.route("/:movieId([0-9]+)/theaters").get(controller.list)

router.route("/:movieId([0-9]+)").get(controller.read);

router.route("/:movieId([0-9]+)/reviews").get(controller.list);

module.exports = router;