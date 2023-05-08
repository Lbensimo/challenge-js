export function build(numBricks) {
    let brickCount = 0;
  
    const intervalId = setInterval(() => {
      if (brickCount >= numBricks) {
        clearInterval(intervalId);
      } else {
        brickCount++;
        const brick = document.createElement("div");
        brick.setAttribute("id", `brick-${brickCount}`);
        brick.appendChild(document.createTextNode(`${brickCount}`));
        if (brickCount % 3 == 2) {
          brick.dataset.foundation = true
        }
        document.body.appendChild(brick); 
      }
    }, 100);
}

export function repair(...ids) {
    ids.forEach(id => {
      const brick = document.getElementById(id);
      if (brick) {
        if (brick.getAttribute("foundation") === "true") {
          brick.dataset.repaired = "in progress";
        } else {
          brick.dataset.repaired = true;
        }
      }
    });
}

export function destroy() {
    const bricks = document.querySelectorAll("div[id^='brick-']");
    if (bricks.length > 0) {
      const lastBrick = bricks[bricks.length - 1];
      lastBrick.parentNode.removeChild(lastBrick);
    }
}