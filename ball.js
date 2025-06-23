const ball = document.createElement("div");
ball.style.width = "50px";
ball.style.height = "50px";
ball.style.borderRadius = "50%";
ball.style.background = "red";
document.body.appendChild(ball);

/* animate ball */
const moveBall = (x, y) => {
    ball.style.position = "absolute";
    ball.style.left = x + "px";
    ball.style.top = y + "px";
};

moveBall(300, 300);