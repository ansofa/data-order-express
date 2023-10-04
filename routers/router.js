const express = require("express");
const DataOrderController = require("../controllers/data-order-controller");
const router = express.Router();
const dataOrderController = new DataOrderController();

router.get("/", async (req, res) => {
  res.send("Disini Json data order");
});

router.get("/orders", dataOrderController.readDataOrder);
router.post("/orders", dataOrderController.saveDataOrder);

module.exports = router;
