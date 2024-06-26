const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Import And Use Routers Here
/* ************************************************************************* */

const itemsRouter = require("./items/router");
const programsRouter = require("./programs/router");
const categoriesRouter = require("./categories/router");

router.use("/items", itemsRouter);
router.use("/programs", programsRouter);
router.use("/categories", categoriesRouter)

const { sayWelcome } = require("../../controllers/sayActions");

router.get("/", sayWelcome);

/* ************************************************************************* */

module.exports = router;
