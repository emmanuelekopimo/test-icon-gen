const express = require("express");
const { createCanvas, registerFont } = require("canvas");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

registerFont("Rubik-ExtraBold.ttf", { family: "Rubik" });

app.get("/gen", (req, res) => {
  const width = 100;
  const height = 100;
  const canvas = createCanvas(width, height);
  const ctx = canvas.getContext("2d");

  // Background
  ctx.fillStyle = "#C01717";
  ctx.fillRect(0, 0, width, height);

  // CS text
  ctx.fillStyle = "black";
  ctx.font = "bold 45px Rubik";
  ctx.textAlign = "center";
  ctx.fillText("CSS", width / 2, height / 2 + 4);

  // Bottom section
  ctx.fillStyle = "#700A0A";
  ctx.fillRect(0, height - 30, width, 30);

  // 2022 text
  ctx.fillStyle = "white";
  ctx.font = "bold 25px Rubik";
  ctx.fillText("2022", width / 2, height - 5);

  // Send image
  res.setHeader("Content-Type", "image/png");
  res.send(canvas.toBuffer("image/png"));
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
