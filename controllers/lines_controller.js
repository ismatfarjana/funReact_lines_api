const {
  addLine,
  readLine,
  getOneLineById,
  updateLine,
  deleteLine
} = require("../utils/linesUtilites");

const addNewLine = (req, res) => {
  addLine(req)
    .then(line => {
      console.log(line);
      console.log("line saved!", line);
      res.json(line);
    })
    .catch(err => res.status(400).json("Error while adding new line:" + err));
};

const allLines = (req, res) => {
  readLine(req)
    .then(lines => res.json(lines))
    .catch(err => res.status(400).json("Error while getting all lines:" + err));
};

const oneLine = (req, res) => {
  getOneLineById(req)
    .then(line => res.json(line))
    .catch(err => res.status(500).json("Error while getting one line:" + err));
};

const updateOneLine = (req, res) => {
  updateLine(req, res);
};

const deleteOneLine = (req, res) => {
  deleteLine(req.params.id)
    .then(res.send("Line is deleted!"))
    .catch(err => res.status(400).json("Error:" + err));
};

module.exports = {
  addNewLine,
  allLines,
  updateOneLine,
  deleteOneLine,
  oneLine
};
