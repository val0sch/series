const express = require("express");

const { SerieController } = require("./controllers");

const router = express.Router();

router.get("/api/series", SerieController.browse);
router.get("/api/series/:id", SerieController.read);
router.put("/api/series/:id", SerieController.edit);
router.post("/api/series", SerieController.add);
router.delete("/api/series/:id", SerieController.delete);

module.exports = router;
