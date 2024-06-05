const tables = require("../../database/tables");

const categories = [
    {
      id: 1,
      name: "Science-Fiction",
    },
    {
      id: 2,
      name: "Comédie",
    },
  ];

  const read = (req, res) => {
    const parsedId = parseInt(req.params.id, 10);
    const category = categories.filter((c) => c.id === parsedId);

    if (category != null) {
        res.json(category)
    } else {
        res.json(categories)
    }
  }

  const browse = async (req, res) => {
    const categoriesFromDB = await tables.category.readAll();

    return res.json(categoriesFromDB);
  }

  module.exports = { browse, read };