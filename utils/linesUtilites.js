const LineModel = require("../models/Line");

//create
const addLine = req => {
  const line = req.body.line;
  const newLine = new LineModel({
    line
  });
  return newLine.save();
};
//read
const readLine = () => {
  return LineModel.find();
};

const getOneLineById = id => {
  return LineModel.findById(id);
};

//update
const updateLine = (req, res) => {
  return LineModel.findByIdAndUpdate(
    req.params.id,
    { line: req.body.line },
    {
      new: true //why true?? try to remeber :P
    },
    (err, post) => {
      if (err) {
        console.log(err);
      } else {
        res.json(post);
      }
    }
  );
};
//delete
const deleteLine = id => {
  return LineModel.findByIdAndDelete(id);
};

module.exports = { addLine, readLine, updateLine, deleteLine, getOneLineById };
