const express = require("express");

const router = express.Router();

router.post("/", (req, res) => {
  const { question } = req.body;

  let answer = "I'm still learning!";

  if (question.toLowerCase().includes("stock")) {
    answer = "Copper Wire stock is low. Reorder recommended.";
  } else if (question.toLowerCase().includes("orders")) {
    answer = "There are currently 128 active orders.";
  } else if (question.toLowerCase().includes("employee")) {
    answer = "There are 86 employees in the factory.";
  }

  res.json({ answer });
});

module.exports = router;