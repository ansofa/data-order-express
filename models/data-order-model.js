const fs = require("node:fs/promises");

class DataOrder {
  async read() {
    try {
      const file = await fs.readFileSync("/tmp/data_order.json", {
        encoding: "utf-8",
      });
      return eval(file);
    } catch (error) {
      console.log(error);
    }
  }

  async save(body) {
    try {
      await fs.createWriteStream("/tmp/data_order.json", JSON.stringify(body, null, 2));
      return "Success"
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = DataOrder;
