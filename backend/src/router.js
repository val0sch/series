const express = require("express");

const { SerieController, AdminController } = require("./controllers");

const router = express.Router();

router.get("/api/series", SerieController.browse);
router.get("/api/series/:id", SerieController.read);
router.put("/api/series/:id", SerieController.edit);
router.post("/api/series", SerieController.add);
router.delete("/api/series/:id", SerieController.delete);

router.get("/auth", AdminController.browse);
router.get("/auth/:id", AdminController.read);
router.post("/auth", AdminController.add);
router.put("/auth/:id", AdminController.edit);
router.delete("/auth/:id", AdminController.delete);

module.exports = router;
