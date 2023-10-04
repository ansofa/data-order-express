// const path = require("path");
const fs = require("node:fs/promises");

class DataOrder {
  async read() {
    try {
    //   const databaseDirectory = path.join(process.cwd(), "database");
      const file = await fs.readFile("/tmp/data_order.json", {
        encoding: "utf-8",
      });
      return eval(file);
    } catch (error) {
      console.log(error);
    }
  }

  async save(body) {
    try {
    //   const databaseDirectory = path.join(process.cwd(), "database");
      await fs.writeFile("/tmp/data_order.json", JSON.stringify(body, null, 2));
      return "Success";
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = DataOrder;
