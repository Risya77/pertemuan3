const foodsRoutes = require("express").Router();
const foodsControllers = require("../controllers/foodsControllers");
const authMiddleware = require("../helpers/authMiddleware");

foodsRoutes.get("/", authMiddleware.checkLogin, foodsControllers.getAllFoods);
foodsRoutes.post("/", foodsControllers.postFoods);
foodsRoutes.get("/:id", foodsControllers.getDataById);
foodsRoutes.post("/:id", foodsControllers.updateDataById);
foodsRoutes.delete("/:id", foodsControllers.deleteData);
module.exports = foodsRoutes;