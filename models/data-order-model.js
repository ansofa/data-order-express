const fs = require("fs");

class DataOrder {
  async read() {
    try {
      const file = fs.readFileSync("/tmp/data_order.json", "utf-8");
      return eval(file);
    } catch (error) {
      console.log(error);
    }
  }

  async save(body) {
    try {
      fs.createWriteStream("/tmp/data_order.json", JSON.stringify(body, null, 2));
      return "Success"
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = DataOrder;
