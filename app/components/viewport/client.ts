export function initializeViewport(viewport: HTMLElement) {
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

  return () => observer.disconnect();
}
