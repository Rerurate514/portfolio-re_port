export function initializeBackDrop() {
  const canvas = document.querySelector<HTMLCanvasElement>("#backdrop-canvas");

  if (!canvas) return;

  const ctx = canvas.getContext("2d");

  if (!ctx) return;

  canvas.requestPaint();

  canvas.width = 1920;
  canvas.height = 1080;

  const r = 20;

  ctx.save();

  drawBackPlate(ctx, r);
  drawLeftLine(ctx);
  drawPlateLine(ctx);

  ctx.restore();

  canvas.addEventListener("paint", () => {
    const projectCode = canvas.querySelector<Element>(".backdrop-project-code");
    if (!projectCode) return;
    ctx.drawElementImage(projectCode, 300, 400);
  });
}

function drawLeftLine(ctx: CanvasRenderingContext2D) {
  ctx.beginPath();
  ctx.moveTo(180, 350);
  ctx.lineTo(180, 830);

  ctx.lineWidth = 4;
  ctx.strokeStyle = "#01002A";
  ctx.stroke();
}

function drawBackPlate(ctx: CanvasRenderingContext2D, r: number) {
  ctx.beginPath();

  ctx.lineTo(200, 830);
  ctx.arcTo(200, 350, 1200, 150, r);
  ctx.lineTo(1200, 350);
  ctx.lineTo(1300, 450);
  ctx.lineTo(1600, 450);
  ctx.lineTo(1700, 350);
  ctx.lineTo(2700, 350);
  ctx.lineTo(2700, 930);
  ctx.lineTo(300, 930);

  ctx.closePath();

  ctx.shadowColor = "rgba(0, 0, 0, 0.5)";
  ctx.shadowBlur = 40;
  ctx.shadowOffsetX = -30;
  ctx.shadowOffsetY = 30;

  ctx.fillStyle = "#01002A";
  ctx.fill();
}

function drawPlateLine(ctx: CanvasRenderingContext2D) {
  ctx.beginPath();

  ctx.moveTo(1300, 500);
  ctx.lineTo(1600, 500);
  ctx.lineTo(1700, 400);
  ctx.lineTo(1800, 400);

  ctx.lineWidth = 2;
  ctx.strokeStyle = getCSSColor("--white");
  ctx.stroke();
}

function getCSSColor(name: string): string {
  return getComputedStyle(document.documentElement)
    .getPropertyValue(name)
    .trim();
}
