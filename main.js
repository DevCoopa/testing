const canvas = document.querySelector("#canvas");
const c = canvas.getContext("2d");

const canvas_width = 600;
const canvas_height = 400;

canvas.width = canvas_width;
canvas.height = canvas_height;

c.fillStyle("#6EEDFF")
c.fillRect(0, 0, canvas_width, canvas_height);
c.fill();
