const fs = require("node:fs/promises");

class DataOrder {
  async read() {
    try {
      const file = await fs.readFile("/database/data_order.json", {
        encoding: "utf-8"
      });
      return eval(file);
    } catch (error) {
      console.log(error);
    }
  }

  async save(body) {
    try {
      await fs.writeFile("/database/data_order.json", JSON.stringify(body, null, 2));
      return "Success"
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = DataOrder;
