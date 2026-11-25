import { createClient } from "honox/client";

createClient();

const viewport = document.querySelector<HTMLElement>(".viewport");

if (viewport) {
  const updateScale = () => {
    const scale = Math.min(
      viewport.clientWidth / 1920,
      viewport.clientHeight / 1080
    );

    viewport.style.setProperty(
      "--scene-scale",
      String(scale)
    );
  };

  const observer = new ResizeObserver(updateScale);

  observer.observe(viewport);
  updateScale();
}
