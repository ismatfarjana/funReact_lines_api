const router = require("express").Router();
const {
  addNewLine,
  allLines,
  updateOneLine,
  deleteOneLine,
  oneLine
} = require("../controllers/lines_controller");

router.post("/", addNewLine);
router.get("/", allLines);
router.get("/:id", oneLine);
router.put("/:id", updateOneLine);
router.delete("/:id", deleteOneLine);

module.exports = router;
