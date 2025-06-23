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

/* requestAnimationFrame  to animate ball randomly */
const animateBall = () => {
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;
    moveBall(x, y);
    requestAnimationFrame(animateBall);
    /* change ball color */
    ball.style.background = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
};

animateBall();
