const DataOrder = require("../models/data-order-model");

class DataOrderController {
  async readDataOrder(req, res) {
    try {
      const dataOrder = new DataOrder();
      const orders = await dataOrder.read();
      res.status(200).json(orders);
    } catch (error) {
      res.status(400).json(error.message);
    }
  }

  async saveDataOrder(req, res) {
    try {
        const bodyJson = req.body
        const dataOrder = new DataOrder()
        const saveData = await dataOrder.save(bodyJson)
        res.status(200).json({message: saveData})
    } catch (error) {
        res.status(400).json(error.message);
    }
  }
}

module.exports = DataOrderController
