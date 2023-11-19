import { main } from "./game/main";

export const canvas: HTMLCanvasElement = document.getElementById(
  "canvas"
) as HTMLCanvasElement;

export const ctx = canvas.getContext("2d")!;

function render() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  main(ctx);
  requestAnimationFrame(render);
}

requestAnimationFrame(render);
