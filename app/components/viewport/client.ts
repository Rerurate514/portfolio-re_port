export function initializeViewport(viewport: HTMLElement) {
	const updateScale = () => {
		const sceneScale = Math.min(
			viewport.clientWidth / 1920,
			viewport.clientHeight / 1080,
		);
		const backdropScale = Math.max(
			viewport.clientWidth / 1920,
			viewport.clientHeight / 1080,
		);

		viewport.style.setProperty("--scene-scale", String(sceneScale));
		viewport.style.setProperty("--backdrop-scale", String(backdropScale));
	};

	const observer = new ResizeObserver(updateScale);

	observer.observe(viewport);
	updateScale();

	return () => observer.disconnect();
}
